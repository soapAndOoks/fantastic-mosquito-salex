'use strict'

function generateRandomMessage(){
  let messages = ["", "Have you tried searching up what a virus is?", "Error", "0xDF6 crash", "BUZZ", "unhandled exception", "..."];
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

export {slowlyReplaceAllText, cycleText}
