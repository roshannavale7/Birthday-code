const heartContainer=document.getElementById("heartContainer");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*35)+"px";

    heart.style.animationDuration=
    (5+Math.random()*7)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,120);

// sparkle

for(let i=0;i<60;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDelay=Math.random()*3+"s";

document.getElementById("scene1")
.appendChild(sparkle);

}

// end sparkle

// yes button 
const yesBtn=document.getElementById("yesBtn");

yesBtn.onclick=()=>{

nextScene();

}
// end yes button 

// no button 
const noBtn=document.getElementById("noBtn");

let distance=120;

function moveButton(){

distance+=25;

const x=(Math.random()*distance)-(distance/2);

const y=(Math.random()*distance)-(distance/2);

noBtn.style.transform=
`translate(${x}px,${y}px) rotate(${Math.random()*40}deg)`;

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("click",moveButton);
// end no button 