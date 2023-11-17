let sketchPad = document.querySelector(".sketchpad");

let input = document.querySelector("input");

// this is used to populate the grid layout

function getRgbColour() {
  let button = document.querySelector(".rgb-colour-btn");
  button.classList.add("rgb-colour-background");
  let bwColour = document.querySelector(".bw-colour-btn");
  bwColour.classList.remove("bw-colour-background");
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function getBwColour() {
  let button = document.querySelector(".bw-colour-btn");
  button.classList.add("bw-colour-background");
  let rgbColour = document.querySelector(".rgb-colour-btn");
  rgbColour.classList.remove("rgb-colour-background");
  return "black";
}

function populateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("gridBox");
      gridBox.style.width = `${500 / gridSize}px`;
      gridBox.style.height = `${400 / gridSize}px`;
      row.appendChild(gridBox);
      gridBox.addEventListener("mouseover", (e) => {
        if (document.querySelector(".rgb-colour-background")) {
          gridBox.style.backgroundColor = getRgbColour();
        } else {
          gridBox.style.backgroundColor = "black";
        }
      });

      sketchPad.appendChild(row);
    }
  }
}

input.addEventListener("input", (event) => {
  sketchPad.innerHTML = "";
  gridSize = event.target.value;
  populateGrid(gridSize);
});

function wipeBoard() {
  let gridBox = document.querySelectorAll(".gridBox");
  gridBox.forEach(grid=> grid.style.backgroundColor = "white")
  console.log(gridBox);
}
