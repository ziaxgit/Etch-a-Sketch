let sketchPad = document.querySelector(".sketchpad");

let input = document.querySelector("input");

// this is used to populate the grid layout
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
        const randomBetween = (min, max) =>
          min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        if ((e.type = "mousedown")) {
          gridBox.style.backgroundColor = rgb;
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
