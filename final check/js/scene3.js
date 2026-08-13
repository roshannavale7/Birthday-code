const flame=document.getElementById("flame");

const smoke=document.getElementById("smoke");

const wish=document.getElementById("wishText");

const countdown=document.getElementById("countdown");

// create starts 
for(let i=0;i<70;i++){

const star=document.createElement("div");

star.className="star";

star.innerHTML="✨";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

document
.getElementById("scene3")
.appendChild(star);

}
// end create stars 

// scene start function 
function startWishScene(){

wish.innerHTML="Blowing candle in...";

let seconds=5;

countdown.innerHTML=seconds;

const timer=setInterval(()=>{

seconds--;

countdown.innerHTML=seconds;

if(seconds===0){

clearInterval(timer);

blowCandle();

}

},1000);

}
//end  scene start function 
// blow candle
function blowCandle(){

flame.style.display="none";

smoke.style.display="block";

smoke.innerHTML="💨";

smoke.style.animation=
"smokeRise 3s forwards";

wish.innerHTML="Close Your Eyes ❤️";

countdown.innerHTML="";

setTimeout(()=>{

wish.innerHTML=
"Now Make A Beautiful Wish 🌟";

},2500);

setTimeout(()=>{

wish.innerHTML=
"I Hope Every Dream Comes True 💖";

},5500);

setTimeout(()=>{

nextScene();

},9000);

} 
// end blow candle 

// start scene 
document.addEventListener("scene3",()=>{

startWishScene();

});
// end start scene 