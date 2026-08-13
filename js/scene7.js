const replay=document.getElementById("replayBtn");

function createEndingHeart(){

const heart=document.createElement("div");

heart.className="finalHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(20+Math.random()*35)+"px";

heart.style.animationDuration=
(5+Math.random()*5)+"s";

document
.getElementById("scene7")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createEndingHeart,200);

replay.onclick=()=>{

showScene(0);

document.dispatchEvent(

new Event("scene1")

);

window.scrollTo({

top:0,

behavior:"smooth"

});

};