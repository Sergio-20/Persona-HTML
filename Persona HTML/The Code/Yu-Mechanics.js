    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    let Yu = document.getElementById("Yu");

    let pixel_Y_Pos = "30px";

    let xPos = 0;
    let yPos = 0;

    let health = 120;
    let attackDamage = 8;
    let damageRepulsion = -8;

    let attack = false;

    let idleAnimations = ["../Characters/Yu Narukami/Yu-Narukami-Idle.gif","../Characters/Yu Narukami/Yu-Narukami-Idle2.gif"];

    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);

    function keyDownHandler(e)
    {

      if(e.keyCode == 39) {

        if(pixel_Y_Pos === "500px")
        {

          if(xPos >= 1120)
          {
            xPos = 1120;
          }

          Yu.style.transform = "scale(-1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos += 25;
          Yu.style.left = xPos + "px";
          yPos = 500;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }
        else
        {
          Yu.style.transform = "scale(-1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos += 25;
          Yu.style.left = xPos + "px";
          yPos += 5;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }

      }

      else if(e.keyCode == 37)
      {
        if(xPos <= 0)
        {
          xPos = 0;
        }

        if(pixel_Y_Pos === "500px")
        {
          Yu.style.transform = "scale(1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos -= 25;
          Yu.style.left = xPos + "px";
          yPos = 500;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }
        else
        {
          Yu.style.transform = "scale(1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Sprint.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          xPos -= 25;
          Yu.style.left = xPos + "px";
          yPos += 5;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }

      }

      else if(e.keyCode == 40)
      {
        if(pixel_Y_Pos === "500px")
        {
          Yu.style.transform = "scale(1,1)";
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Crouch.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          yPos = 500;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }
        else
        {
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Crouch.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          yPos += 25;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }
      }

      else if(e.keyCode == 38)
      {
        if(pixel_Y_Pos === "-25px")
        {
          yPos = 0;
          Yu.style.top = yPos + "px";
        }
        else
        {
          Yu.src = "../Characters/Yu Narukami/Yu-Narukami-Twirl.gif";
          Yu.style.height = "150";
          Yu.style.width = "150";
          yPos -= 25;
          Yu.style.top = yPos + "px";
          pixel_Y_Pos = Yu.style.top.valueOf();
        }

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

      let randomIdle = Math.floor(Math.random() * 2);

        Yu.src = idleAnimations[randomIdle].toString();
        if(randomIdle == 1){Yu.style.width = "100"}
        Yu.style.height = "150";
        Yu.style.width = "200";

    }
