function toggleParagraphs() {
  var p1 = document.getElementById("paragraph1");
  var p2 = document.getElementById("paragraph2");
  var toggleButton = document.getElementById("myButton");

  if (p1.style.display === "none") {
    p1.style.display = "block";
    p2.style.display = "none";
    toggleButton.textContent = "Switch to read about 2021";
  } else {
    p1.style.display = "none";
    p2.style.display = "block";
    toggleButton.textContent = "Switch to read about 2011";
  }
}