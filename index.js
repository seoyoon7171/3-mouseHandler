import "./styles.css";
const greeting = document.getElementById("js-greeting");

const colors = ["mistyrose", "darkorange", "aquamarine", "cornflowerblue"];

const superEventHandler = {
  rightClick: function () {
    console.log(greeting);
    greeting.innerText = "That is right click!";
    greeting.style.color = colors[1];
  },
  mouseDefault: function () {
    greeting.innerText = "mouse is gone!";
    greeting.style.color = colors[2];
  },
  leftClick: function () {
    greeting.innerText = "mouse is on!";
    greeting.style.color = colors[3];
  },
  resize: function () {
    greeting.innerText = "You're resizing now!";
    greeting.style.color = colors[0];
  }
};

window.addEventListener("contextmenu", superEventHandler.rightClick);
greeting.addEventListener("mouseleave", superEventHandler.mouseDefault);
greeting.addEventListener("mouseenter", superEventHandler.leftClick);
window.addEventListener("resize", superEventHandler.resize);
