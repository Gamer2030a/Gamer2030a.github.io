function myFunction() {
    var x = document.getElementById("Tran0");
    x.style.display === "none"
      x.style.display = "block";
}

window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("section-2");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        alert("You've scrolled past the second div");
    }
  });