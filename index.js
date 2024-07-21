document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#preloader").style.visibility = "visible";
        window.scrollTo(0, 0);
  } else {
      document.querySelector(
        "#preloader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

window.onload = function()  {
  document.getElementById("SecondaryQuote").style.display  = "none";
  document.getElementById("nav").style.visibility  = "hidden";
}

window.onscroll = function() {
  var y = window.scrollY;
  if (y > 1350) {
    document.getElementById("SecondaryQuote").style.display   = "none";
    document.getElementById("MainQuote").style.visibility  = "hidden";
  }else if (y > 290) {
    document.getElementById("MainQuote").style.visibility   = "hidden";
    document.getElementById("SecondaryQuote").style.display  = "block";
  }else {
    document.getElementById("MainQuote").style.visibility   = "visible";
    document.getElementById("SecondaryQuote").style.display  = "none";
  }
};


//new for projects showcase
document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.Cards');
  const cards = Array.from(document.querySelectorAll('.Card'));

  // Clone cards to create a seamless loop
  cards.forEach(card => {
      const clone = card.cloneNode(true);
      cardsContainer.appendChild(clone);
  });

  const totalCards = cards.length * 6; // Original + Cloned

  // Ensure the animation runs smoothly by setting the right duration and iteration count
  const animationDuration = 20; // Duration of one full scroll
  const cardWidth = cards[0].offsetWidth + 10; // Including margin
  const totalWidth = cardWidth * totalCards;

  // Adjust animation duration based on the total width of cards
  const animationKeyframes = `
      @keyframes scroll {
          0% {
              transform: translateX(0);
          }
          100% {
              transform: translateX(-${totalWidth / 6}px);
          }
      }
  `;

  // Append the generated keyframes to the document's stylesheet
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = animationKeyframes;
  document.head.appendChild(styleSheet);

  // Restart the animation periodically to avoid glitches
  setInterval(() => {
      cardsContainer.style.animation = 'none';
      cardsContainer.offsetHeight; // Trigger a reflow
      cardsContainer.style.animation = `scroll ${animationDuration}s ease-in infinite`;
  }, animationDuration * 990);
});
