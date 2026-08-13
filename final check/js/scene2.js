const balloons=document.querySelectorAll(".balloon");

const balloonMessage=
document.getElementById("balloonMessage");

const special=
document.getElementById("specialMessage");

let popped=0;

balloons.forEach(balloon=>{

balloon.onclick=()=>{

if(balloon.classList.contains("pop"))
return;

balloon.classList.add("pop");

balloonMessage.innerHTML=
balloon.dataset.message;

popped++;

if(popped===4){

setTimeout(showFinalMessage,1000);

}

};

});

// final celebration 
function showFinalMessage(){

special.style.display="block";

flowerRain();

confetti();

setTimeout(()=>{

nextScene();

},5000);

}
//end final celebration 

// flower rain
function flowerRain(){

for(let i=0;i<150;i++){

const flower=
document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=
Math.random()*100+"vw";

flower.style.animationDuration=
(4+Math.random()*4)+"s";

flower.style.fontSize=
(20+Math.random()*25)+"px";

document
.getElementById("scene2")
.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

} 
// end flower rain 

// confetti 
function confetti(){

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.style.position="absolute";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.width="8px";

piece.style.height="18px";

piece.style.background=
`hsl(${Math.random()*360},100%,60%)`;

piece.style.transform=
`rotate(${Math.random()*360}deg)`;

piece.style.animation=
`flowerFall ${3+Math.random()*3}s linear`;

document
.getElementById("scene2")
.appendChild(piece);

setTimeout(()=>piece.remove(),6000);

}

}