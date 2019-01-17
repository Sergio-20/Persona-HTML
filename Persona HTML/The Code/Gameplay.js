//Manages actual gameplay and mechanics

let userHealthBar = document.createElement("PROGRESS");
let cpuHealthBar = document.createElement("PROGRESS");



let ost = [["../OST/A Way Of Life.mp3", "../OST/Beneath the Mask.mp3", "../OST/Brand New Days.mp3", "../OST/Burn My Dread.mp3"],
["../OST/Changing Seasons.mp3", "../OST/Dance!.mp3", "../OST/Deep breath Deep breath.mp3", "../OST/Heartbreak, Heartbreak.mp3"],
["../OST/Heaven.mp3", "../OST/Joy.mp3", "../OST/Kimi no Kioku.mp3", "../OST/Last Surprise.mp3"],
["../OST/More Than One Heart.mp3", "../OST/Never More.mp3", "../OST/Our Moment.mp3", "../OST/Soul Phase.mp3"]];


document.addEventListener("keydown", onKeyDownHandler);
document.addEventListener("keyup", onKeyUpHandler);


class Person{

  constructor(name, attack, block, health){
    this.name = name;
    this.attack = attack;
    this.block = block;
    this.health = health;
  }

  getName()
  {
    return this.name;
  }

}

class Player extends Person{

  attackCPU()
  {
      return (cpuHealthBar.value);
  }



}

class CPU extends Person{

  attackPlayer()
  {
      return (userHealthBar.value);
  }

  //implement defense system

}


//The A.I. that makes decisions
function cpuBrain()
{

}

//Prompts user on their win or loss
//Returns can return to Title Screen or Selection Screen
function battleEnd()
{

}


function displayNames()
{

}

function invisibleWalls()
{

}

//Used for player actions
function onKeyDownHandler(e)
{

  if(e.keyCode === 65)//"A" Button Press
  {
    if(currentAnim === AigisAnim[0].toString()){
      player.src = "../Characters/Aigis/aigis-attack.gif";
    }
    else if(currentAnim === ChieAnim[0].toString()){
      player.src = "../Characters/Chie Satonaka/chie-attack.gif";
    }
    else if(currentAnim === KumaAnim[0].toString()){
      player.src = "../Characters/Kuma/kuma-attack.gif";
    }
    else if(currentAnim === LabrysAnim[0].toString()){
      player.src = "../Characters/Labrys/labrys-attack.gif";
    }
    else if(currentAnim === MitsuruAnim[0].toString()){
      player.src = "../Characters/Mitsuru Kirijo/mitsuru-attack.gif";
    }
    else if(currentAnim === ShoAnim[0].toString()){
      player.src = "../Characters/Sho Minazuki/sho-attack.gif";
    }
    else if(currentAnim === YosukeAnim[0].toString()){
      player.src = "../Characters/Yosuke Hanamura/yosuke-attack.gif";
    }
    else if(currentAnim === YukikoAnim[0].toString()){
      player.src = "../Characters/Yukiko Amagi/yukiko-attack.gif";
    }
    else if(currentAnim === YuAnim[0].toString()){
      player.src = "../Characters/Yu Narukami/yu-attack.gif";
    }

  }

  else if(e.keyCode === 83)//"S" Button Press
  {

      if(currentAnim === AigisAnim[0].toString()){
        player.src = "../Characters/Aigis/aigis-block.gif";
      }
      else if(currentAnim === ChieAnim[0].toString()){
        player.src = "../Characters/Chie Satonaka/chie-block.gif";
      }
      else if(currentAnim === KumaAnim[0].toString()){
        player.src = "../Characters/Kuma/kuma-block.gif";
      }
      else if(currentAnim === LabrysAnim[0].toString()){
        player.src = "../Characters/Labrys/labrys-block.gif";
      }
      else if(currentAnim === MitsuruAnim[0].toString()){
        player.src = "../Characters/Mitsuru Kirijo/mitsuru-block.gif";
      }
      else if(currentAnim === ShoAnim[0].toString()){
        player.src = "../Characters/Sho Minazuki/sho-block.gif";
      }
      else if(currentAnim === YosukeAnim[0].toString()){
        player.src = "../Characters/Yosuke Hanamura/yosuke-block.gif";
      }
      else if(currentAnim === YukikoAnim[0].toString()){
        player.src = "../Characters/Yukiko Amagi/yukiko-block.gif";
      }
      else if(currentAnim === YuAnim[0].toString()){
        player.src = "../Characters/Yu Narukami/yu-block.gif";
      }

  }

  if(e.keyCode === 37)//Left Arrow Key
  {
    //Move Left
  }
  else if(e.keyCode === 39)//Right Arrow Key
  {
    //Move Right
  }

  else if(e.keyCode === 38)//Up Arrow Key
  {
      //Jump
  }

  else if(e.keyCode === 36)//Down Arrow Key
  {
    //Crouch
  }

}

function onKeyUpHandler(e)
{
  if(e.keyCode === 65){

    if(currentAnim.includes("Aigis")){
      player.src = AigisAnim[0].toString();
    }
    else if(currentAnim.includes("Chie")){
      player.src = ChieAnim[0];
    }
    else if(currentAnim.includes("Kuma")){
      player.src = KumaAnim[0];
    }
    else if(currentAnim.includes("Labrys")){
      player.src = LabrysAnim[0];
    }
    else if(currentAnim.includes("Mitsuru")){
      player.src = MitsuruAnim[0];
    }
    else if(currentAnim.includes("Sho")){
      player.src = ShoAnim[0];
    }
    else if(currentAnim.includes("Yosuke")){
      player.src = YosukeAnim[0];
    }
    else if(currentAnim.includes("Yukiko")){
      player.src = YukikoAnim[0];
    }
    else if(currentAnim.includes("Yu")){
      player.src = YuAnim[0];
    }
  }

  else if(e.keyCode === 83){

    if(currentAnim.includes("Aigis")){
      player.src = AigisAnim[0].toString();
    }
    else if(currentAnim.includes("Chie")){
      player.src = ChieAnim[0];
    }
    else if(currentAnim.includes("Kuma")){
      player.src = KumaAnim[0];
    }
    else if(currentAnim.includes("Labrys")){
      player.src = LabrysAnim[0];
    }
    else if(currentAnim.includes("Mitsuru")){
      player.src = MitsuruAnim[0];
    }
    else if(currentAnim.includes("Sho")){
      player.src = ShoAnim[0];
    }
    else if(currentAnim.includes("Yosuke")){
      player.src = YosukeAnim[0];
    }
    else if(currentAnim.includes("Yukiko")){
      player.src = YukikoAnim[0];
    }
    else if(currentAnim.includes("Yu")){
      player.src = YuAnim[0];
    }
  }

  //implement gravity
}

function OST()
{
  let randomRow = Math.floor(Math.random() * 4);
  let randomCol = Math.floor(Math.random() * 4);
  audio.src = ost[randomRow][randomCol];
  audio.play();
}

function setHealthbar()
{
  userHealthBar.setAttribute("value", "80");
  cpuHealthBar.setAttribute("value","80");
  userHealthBar.setAttribute("max","100");
  cpuHealthBar.setAttribute("max","100");

  userHealthBar.setAttribute("id", "playerHealth");

  cpuHealthBar.setAttribute("id", "cpuHealth");

  userHealthBar.setAttribute("style", "display: block; position: absolute; top: 1em; left: 0.5em; background-color: red;");

  cpuHealthBar.setAttribute("style", "display: block; position: absolute; top: 1em; right: 0.5em; background-color: red; transform: scaleX(-1);");
}


let cpu001 = new CPU("Mitsuru",7,7,115,);
let user001 = new Player("Yu",8,8,100);
console.log(cpu001.attackPlayer());
console.log(user001.attackCPU());
