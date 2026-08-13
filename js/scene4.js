const roseMessage=document.getElementById("roseMessage");

const roseQuotes=[

"You deserve every happiness ❤️",

"You are my forever 🌹",

"My life became beautiful because of you 💖",

"Thank you for being my world 🥰",

"I love you endlessly ❤️"

];

// petal rain 
function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(4+Math.random()*5)+"s";

petal.style.fontSize=
(20+Math.random()*20)+"px";

document
.getElementById("scene4")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

}

setInterval(createPetal,150);
//end petal rain 

// typing animation 
let quote=0;

function showRoseQuotes(){

roseMessage.innerHTML="";

let i=0;

const text=roseQuotes[quote];

const typing=setInterval(()=>{

roseMessage.innerHTML+=text.charAt(i);

i++;

if(i===text.length){

clearInterval(typing);

}

},80);

quote++;

if(quote>=roseQuotes.length){

quote=0;

}

}
//end typing animation 

// scene start 
document.addEventListener("scene4",()=>{

showRoseQuotes();

setInterval(showRoseQuotes,4000);

setTimeout(()=>{

nextScene();

},18000);

});

