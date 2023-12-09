"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, cycleText} from "./textReplacer.js"

setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 3909);
setTimeout(function a(){slowlyReplaceAllText(30000)}, 4060);
setTimeout(function a(){setInterval(cycleText())}, 25000);

