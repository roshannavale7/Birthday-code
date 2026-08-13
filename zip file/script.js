const hc=document.getElementById('heart-container');
setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';h.textContent='❤️';
 h.style.left=Math.random()*100+'vw';
 h.style.fontSize=(16+Math.random()*24)+'px';
 hc.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},250);

const no=document.getElementById('noBtn');
no?.addEventListener('mouseenter',()=>{
 no.style.position='fixed';
 no.style.left=Math.random()*(window.innerWidth-120)+'px';
 no.style.top=Math.random()*(window.innerHeight-60)+'px';
});
document.getElementById('yesBtn')?.addEventListener('click',()=>alert('Next page will be implemented in Part 3.'));

document.querySelectorAll('.balloon').forEach((b,i)=>{
 b.addEventListener('click',()=>{
  if(b.classList.contains('pop'))return;
  b.classList.add('pop');
  document.getElementById('balloonMessage').textContent='You are so Special ❤️';
  if(document.querySelectorAll('.balloon.pop').length===4){
    setTimeout(()=>alert('Flower shower & next page will be added in Part 4'),800);
  }
 });
});

const conf=document.createElement('div');conf.id='confetti';document.body.appendChild(conf);
const fl=document.createElement('div');fl.id='flowers';document.body.appendChild(fl);

function shower(container,char,count){
 for(let i=0;i<count;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.textContent=char;
  p.style.left=Math.random()*100+'vw';
  p.style.animationDelay=(Math.random()*1.5)+'s';
  container.appendChild(p);
  setTimeout(()=>p.remove(),3500);
 }
}

function showPage(id){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 const pg=document.getElementById(id);
 if(pg) pg.classList.add('active');
}

document.querySelectorAll('.balloon').forEach(b=>{
 b.addEventListener('click',()=>{
  if(document.querySelectorAll('.balloon.pop').length===4){
    shower(conf,'🎊',60);
    shower(fl,'🌸',50);
    setTimeout(()=>{
      showPage('page3');
      const wish=document.getElementById('wishText');
      const flame=document.getElementById('flame');
      if(flame){
        setTimeout(()=>{
          flame.textContent='💨';
          if(wish) wish.textContent='Close your eyes and make a beautiful wish ❤️';
        },5000);
      }
    },2500);
  }
 });
});

function petals(){
 for(let i=0;i<40;i++){
  const p=document.createElement('div');
  p.className='petal';
  p.textContent='🌹';
  p.style.left=Math.random()*100+'vw';
  p.style.animationDelay=(Math.random()*2)+'s';
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),6000);
 }
}
setTimeout(()=>{
 if(document.getElementById('page3')){
   setTimeout(()=>{
    showPage('page4');
    petals();
    setTimeout(()=>{
      showPage('page5');
      const cards=[...document.querySelectorAll('.card')];
      let i=0;
      const t=setInterval(()=>{
        cards.forEach(c=>c.classList.remove('activeCard'));
        if(i<cards.length){cards[i].classList.add('activeCard');i++;}
        else clearInterval(t);
      },2000);
    },6000);
   },11000);
 }
},100);
