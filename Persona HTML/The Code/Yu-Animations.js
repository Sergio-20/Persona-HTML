    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    var Yu = document.getElementById("Yu");


    var xPos = 0;
    var yPos = 0;

    var attack = false;

    var idleAnimations = ["../Characters/Yu Narukami/Yu-Narukami-Idle.gif","../Characters/Yu Narukami/Yu-Narukami-Idle2.gif"];

    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);

    function keyDownHandler(e)
    {

      if(e.keyCode == 39) {
          Yu.style.transform = "scale(-1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos += 15;
          Yu.style.left = xPos + "px";
      }
      else if(e.keyCode == 37)
      {
          Yu.style.transform = "scale(1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos -= 15;
          Yu.style.left = xPos + "px";
      }
      else if(e.keyCode == 40)
      {
        Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Crouch.gif";
        Yu.style.height = "150";
        Yu.style.width = "150";
        yPos += 20;
        Yu.style.top = yPos + "px";
      }
      else if(e.keyCode == 38)
      {
        Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Twirl.gif";
        Yu.style.height = "150";
        Yu.style.width = "150";
        yPos -= 20;
        Yu.style.top = yPos + "px";
      }
      else if(e.keyCode == 68)
      {
        Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Crouch.gif";
        Yu.style.height = "150";
        Yu.style.width = "150";
      }

      if(attack == false)
      {
      if(e.keyCode == 65)
        {
        attack = true;
        Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Attack.gif";
        Yu.style.height = "150";
        Yu.style.width = "300";
        }
      }


    }

    function keyUpHandler(e)
    {

      attack = false;

      var randomIdle = Math.floor(Math.random() * 2);

        Yu.src = idleAnimations[randomIdle].toString();
        if(randomIdle == 1){Yu.style.width = "100"}
        Yu.style.height = "150";
        Yu.style.width = "200";
        yPos += 20;
        Yu.style.top = yPos + "px";

    }
