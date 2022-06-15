/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var random1 = Math.floor(Math.random() * 4);
  console.log(who[random1]);
  var random2 = Math.floor(Math.random() * 4);
  console.log(what[random2]);
  var random3 = Math.floor(Math.random() * 5);
  console.log(when[random3]);
  document.querySelector("p").innerHTML =
    who[random1] + " " + what[random2] + " " + when[random3];
};
