const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

scenes[index].classList.add("active");

currentScene=index;

/* Fire custom event whenever a scene opens */

document.dispatchEvent(

new Event(`scene${index+1}`)

);

}

function nextScene(){

if(currentScene<scenes.length-1){

showScene(currentScene+1);

}

}

function previousScene(){

    if(currentScene>0){

        showScene(currentScene-1);

    }

}

window.onload=()=>{

    showScene(0);

}
