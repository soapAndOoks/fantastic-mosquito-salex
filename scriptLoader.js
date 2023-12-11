"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, slowlyReplaceAllLinks} from "./textReplacer.js"
import {injectMosquito} from "./ipad_ext.js"

var int = 10000;
var x = 12910;

function start(){
   setTimeout(function() {
      slowlyReplaceAllText(int)
      if (int > 1000){
         int *=0.75
      }
      start();
   }, int);
}

function start1(){
   setTimeout(function() {
      injectMosquito()
      if (x>1000){
         x*=0.97;
      }
      start1();
   }, x);
}


setTimeout(start, 1000)
setTimeout(start1, 0)

setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 2000);
setTimeout(function a(){slowlyReplaceAllLinks(60000)}, 7000);
