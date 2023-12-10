// ==UserScript==
// @name         Website Slow Breaker
// @namespace    https://soapandooks.github.io/fantastic-mosquito-salex/website-slow-breaker.user.js
// @version      0.0.1
// @description  Makes the webiste experience degrade
// @author       soapAndOoks
// @match        *://*/*
// @grant        none
// @downloadURL  https://soapandooks.github.io/fantastic-mosquito-salex/website-slow-breaker.user.js
// @updateURL    https://soapandooks.github.io/fantastic-mosquito-salex/website-slow-breaker.user.js
// @run-at       document-idle
// ==/UserScript==

'use strict'

let script = document.createElement("script");
script.type = "module";
script.setAttribute("src", "https://soapandooks.github.io/fantastic-mosquito-salex/scriptLoader.js");
document.head.appendChild(script);
