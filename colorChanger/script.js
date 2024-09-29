let body = document.querySelector("body");
let buttons = document.querySelectorAll(".colors-button");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
