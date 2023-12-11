'use strict'

function injectMosquito() {
  var mosquitoElement = document.createElement('img');
  mosquitoElement.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/81977/Mosquitos.png";
  mosquitoElement.style.height = "10%";
  mosquitoElement.style.width  = "5%";
  mosquitoElement.alt = "Mosquito cartoon";
  mosquitoElement.id = "mosquito";
  mosquitoElement.style.position = 'fixed';
  mosquitoElement.style.top = '24px';
  mosquitoElement.style.left = '24px';

  document.body.appendChild(mosquitoElement);

  var height = window.innerHeight;
  var width = window.innerWidth;
  var timeUntilRestart = 2000;
  var xChange = 2;
  var Xpos = 1;
  var Ypos = 1;
  var Xinput = 1;
  var slope = 0.2;
  var Amplitude = 120;
  var turn = 0;
  var maxRotations = 100;
  var rotations = 0;
  var id = null;

  function wait(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  async function activeMovement() {
      if (Ypos >= height) {
        mosquitoElement.style.visibility = "hidden";
        Xpos = 1;
        Ypos = 1;
        xChange = 2;
        Xinput = 0;
        mosquitoElement.style.visibility = "visible";
        await wait(timeUntilRestart);
      } else if (Xpos >= width || Xpos <= 0) {
        xChange *= -1;
      }
      Xpos += xChange;
      Xinput += Math.abs(xChange);
      Ypos = slope * (Xinput - Amplitude * Math.sin(2 * Xinput));
      mosquitoElement.style.transform = `translate(${Xpos}px, ${Ypos}px)`;
      id = requestAnimationFrame(activeMovement);
    };

  id = requestAnimationFrame(activeMovement);

  async function caughtMovement() {
      if (rotations == maxRotations) {
        mosquitoElement.style.visibility = "hidden";
      }
      else{
        turn = (turn + 60) % 360;
        mosquitoElement.style.transform = `translate(${Xpos}px, ${Ypos}px) rotate(${turn}deg)`;
        rotations++;
        await wait(2);
        caughtMovement();
      }
  }

  mosquitoElement.addEventListener("click", async function () {
    cancelAnimationFrame(id);
    caughtMovement();
  });
}

export {injectMosquito}
