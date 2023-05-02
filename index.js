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
