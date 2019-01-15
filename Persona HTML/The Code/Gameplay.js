//Manages actual gameplay and mechanics

let userHealthBar = document.createElement("PROGRESS");
let cpuHealthBar = document.createElement("PROGRESS");


let ost = [["../OST/A Way Of Life.mp3", "../OST/Beneath the Mask.mp3", "../OST/Brand New Days.mp3", "../OST/Burn My Dread.mp3"],
["../OST/Changing Seasons.mp3", "../OST/Dance!.mp3", "../OST/Deep breath Deep breath.mp3", "../OST/Heartbreak, Heartbreak.mp3"],
["../OST/Heaven.mp3", "../OST/Joy.mp3", "../OST/Kimi no Kioku.mp3", "../OST/Last Surprise.mp3"],
["../OST/More Than One Heart.mp3", "../OST/Never More.mp3", "../OST/Our Moment.mp3", "../OST/Soul Phase.mp3"]];

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
