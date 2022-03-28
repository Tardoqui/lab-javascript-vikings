// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health = this.health - theDamage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  attack(){ 
    super.attack();
    return this.strength;
  }
  receiveDamage (theDamage){
      this.health = this.health - theDamage;
      if (this.health > 0){
        return `${this.name} has received ${theDamage} points of damage`;
      };
      if (this.health <= 0){
        return `${this.name} has died in act of combat`;
      };
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier {

  receiveDamage(theDamage){
    this.health = this.health - theDamage;
    if (this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }
    if (this.health <= 0){
      return `A Saxon has died in combat`
    }
  }

}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }


  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);  
    let viking1 = this.vikingArmy[randomViking];  
    
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon1 = this.saxonArmy[randomSaxon];

    let damage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    if (saxon1.health <= 0){
      this.saxonArmy.pop(saxon1)
      return `A Saxon has died in combat`;
    }
    else {
      return `A Saxon has received ${this.receiveDamage} points of damage`;
    }   
  }
  saxonAttack(){
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);  
    let viking1 = this.vikingArmy[randomViking];  
    
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon1 = this.saxonArmy[randomSaxon];

    let damage2 = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

    if (viking1.health <= 0){
      this.vikingArmy.pop(viking1)
      return `${this.vikingArmy[0]} has died in act of combat`
    } 
    else {
      return `${this.vikingArmy[0].name} has received ${saxon1.strength} points of damage`
    }
    
  } 
  showStatus(){
    if ((this.saxonArmy.length === 0) && (this.vikingArmy.length > 0)){
      return "Vikings have won the war of the century!"
    }
    else if ((this.vikingArmy.length === 0) && (this.saxonArmy.length > 0)){
      return "Saxons have fought for their lives and survived another day..."
    }
    else if ((this.vikingArmy.length >= 1) && (this.saxonArmy.length >= 1)){
      return "Vikings and Saxons are still in the thick of battle."
    }
  }





}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
