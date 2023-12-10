'use strict'

function getAllTags(tagName) {
  let tags = []
  for (const tag of document.getElementsByTagName(tagName)){tags.push(tag);}
  return tags;
}

function generateRandomMessage(){
  let messages = ["", "Have you tried searching up what a virus is?", "Error", "0xDF6 crash", "BUZZ", "unhandled exception", "...", "Cogito ergo sum", "performace error", "web error", "build error", "load exception", "build difficulty", "logging enabled"];
  let message = messages[Math.floor(Math.random()*messages.length)];
  return message;
}
  
function getAllTags(){
  let tags = []
  for (let tag of document.getElementsByTagName("p")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h1")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h2")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h3")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h4")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h5")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("h6")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("li")){tags.push(tag);}
  for (let tag of document.getElementsByTagName("a")){tags.push(tag);}
  return tags;
}

function replaceOneTagText(tag, delay){
  setTimeout(() => {
    tag.innerText = generateRandomMessage();
  }, delay);
}

  
function slowlyReplaceAllLinks(timeTaken){
  function replaceLinkWithRandomLink(tag, delay){
    tag.href = "https://en.m.wikipedia.org/wiki/Special:Random";
  }
  let linkTags = getAllTags("a");
  const timePerItem = timeTaken/linkTags.length;
  let delay = 0;
  while (linkTags.length){
    let i = Math.floor(Math.random() * linkTags.length);
    replaceLinkWithRandomLink(linkTags[i], delay);
    linkTags.splice(i, 1);
    delay += timePerItem;
  }
}

function slowlyReplaceAllText(timeTaken){
  let allTags = getAllTags();
  const timePerItem = timeTaken/allTags.length;
  let delay = 0;
  while (allTags.length){
    let i = Math.floor(Math.random() * allTags.length);
    replaceOneTagText(allTags[i], delay);
    allTags.splice(i, 1);
    delay += timePerItem;
  }
}


function cycleText(){
  let allTags = getAllTags();
  let delay = 0;
  while (allTags.length){
    let i = Math.floor(Math.random() * allTags.length);
    replaceOneTagText(allTags[i], delay);
    allTags.splice(i, 1);
    delay += 0.05;
  }
}

export {slowlyReplaceAllLinks, slowlyReplaceAllText, cycleText}
