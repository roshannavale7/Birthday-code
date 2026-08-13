const message=`

Happy Birthday My Love ❤️

Every single day with you feels like the most beautiful blessing.

You make my life brighter, my heart happier, and every ordinary moment unforgettable.

Thank you for loving me, supporting me, and standing beside me through everything.

Your smile is my favorite sight.

Your happiness is my biggest dream.

May this birthday bring you endless joy, beautiful memories, good health, and every success you deserve.

I promise to keep loving you today, tomorrow, and forever.

Happy Birthday, My Beautiful Queen.

I Love You More Than Words Can Ever Say ❤️

`;

const target=document.getElementById("typingMessage");

function typeLetter(){

target.innerHTML="";

let i=0;

const typing=setInterval(()=>{

target.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);

setTimeout(()=>{

nextScene();

},5000);

}

},35);

}

document.addEventListener("scene6",typeLetter);