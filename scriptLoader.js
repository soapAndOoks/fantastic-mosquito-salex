"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, slowlyReplaceAllLinks} from "./textReplacer.js"
import {injectMosquito} from "./ipad_ext.js"
  
function start()
{
   setTimeout(function() {
      slowlyReplaceAllText(int)
     int *=0.75
      start();
   }, int);
}

setTimeout(start, 1000)


setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 2000);
setTimeout(function a(){slowlyReplaceAllLinks(60000)}, 7000);

setInterval(injectMosquito, 10000);
