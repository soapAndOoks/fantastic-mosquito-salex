"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, slowlyReplaceAllLinks} from "./textReplacer.js"
import {injectMosquito} from "./ipad_ext.js"

var int = 10000;
var x = 12910;
function start()
{
   setTimeout(function() {
      injectMosquito()
      slowlyReplaceAllText(int)
     int *=0.75
      x *=0.8
      start();
   }, int);
}

setTimeout(start, 1000)


setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 2000);
setTimeout(function a(){slowlyReplaceAllLinks(60000)}, 7000);
