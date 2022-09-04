/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["The", "Our", "Your", "My", "Their"];
  let adjs = [
    "marvelous",
    "elegant",
    "exquisite",
    "glorious",
    "magnificent",
    "splendid",
    "stunning",
    "gorgeous"
  ];
  let nouns = [
    "cup",
    "pills",
    "cat",
    "plant",
    "dog",
    "car",
    "laptop",
    "smartphone"
  ];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        console.log(`${pronoun}${adj}${noun}.com`);
      }
    }
  }
};
