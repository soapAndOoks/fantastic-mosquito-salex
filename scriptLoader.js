"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, cycleText} from "./textReplacer.js"

setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 7000);
setTimeout(function a(){slowlyReplaceAllText(120000)}, 6000);
setTimeout(function a(){setInterval(cycleText())}, 100000);

