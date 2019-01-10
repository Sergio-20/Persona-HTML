let healthPlayer;
let playerAttack;
let playerDefend;

let healthBot;
let botAttack;
let botDefend;

class Player {
	
  constructor(name, attack, defense, health) {
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.name = name;
    healthPlayer = health;
    playerAttack = attack;
    playerDefend = defense;
  }
 
   getAttack(){return this.attack;}
  
   getDefense(){return this.defense;}	
  
   getHealth(){return this.health;}
   
   getName(){return this.name;}
   
   causeDamage(){healthBot = healthBot - playerAttack; return healthBot;}
   
   defend(){healthPlayer = healthPlayer - Math.abs((botAttack - playerDefend)); return healthPlayer;}
   
}

class AI{
	constructor(name, attack, defense, health){
	    this.attack = attack;
	    this.defense = defense;
	    this.health = health;
	    this.name = name;
	    healthBot = health;
	    botAttack = attack;
	    botDefend = defense;
	}
	
	   getAttack(){return this.attack;}
	   
	   getDefense(){return this.defense;}	
	  
	   getHealth(){return this.health;}
	   
	   getName(){return this.name;}
	   
	   causeDamage(){healthPlayer =  healthPlayer - botAttack; return healthPlayer;}
	   
	   defend(){healthBot =  healthBot - Math.abs((playerAttack - botDefend)); return healthBot;}
}
