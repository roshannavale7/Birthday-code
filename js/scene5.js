const cards = document.querySelectorAll(".memory-card");

const counter = document.getElementById("photoCounter");

// sequential animation
document.addEventListener("scene5", () => {
  cards.forEach((card) => {
    card.classList.remove("show");
  });

  let index = 0;

  const interval = setInterval(() => {
    cards[index].classList.add("show");

    counter.innerHTML =
      // "Memory "+(index+1)+" ❤️";

      index++;

    if (index === cards.length) {
      clearInterval(interval);

      setTimeout(() => {
        nextScene();
      }, 6000);
    }
  }, 2000);
});
// end sequential animation
