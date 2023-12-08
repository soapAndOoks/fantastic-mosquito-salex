'use strict';

var counter = 0

function addRandomBackgroundPicture(){
  document.body.style.backgroundImage = "url('https://picsum.photos/200/300?random=" + counter + "')"
  //to generate unique images each time
  counter++
}

function replaceImages(){
  for (var image of document.getElementsByTagName("img")){
    image.src='https://picsum.photos/200/300?random=' + counter
    counter++
  }
}




export {addRandomBackgroundPicture, replaceImages}
