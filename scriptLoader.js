"use strict"

import {addRandomBackgroundPicture, replaceImages} from "./pictureReplacer.js"
import {slowlyReplaceAllText, slowlyReplaceAllLinks} from "./textReplacer.js"

setTimeout(function a(){addRandomBackgroundPicture();replaceImages()}, 2000);
setTimeout(function a(){slowlyReplaceAllText(30000)}, 4060);
setTimeout(function a(){setInterval(function b(){slowlyReplaceAllText(10000)},10000)}, 4060);
setTimeout(function a(){slowlyReplaceAllLinks(60000)}, 7000);
