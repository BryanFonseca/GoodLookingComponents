{
  //////////////////////////////cards

  const cards = document.querySelectorAll('.card');
  let depth = 0;
  cards.forEach((card) => {
    // Sets the z-index property on each card component
    card.style.zIndex = depth;
    depth++;
  });
}

{
  //////////////////////////////switch
  
  const switchItem = document.querySelector(".switch");
  switchItem.addEventListener("click", function() { this.classList.toggle("switch--active"); });
}
