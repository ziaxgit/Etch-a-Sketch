let sketchPad = document.querySelector(".sketchpad");

let gridSize = 4;

// this is used to populate the grid layout
for (let i = 0; i < gridSize; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < gridSize; j++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridBox.style.width = `${500 / gridSize}px`;
    gridBox.style.height = `${500 / gridSize}px`;
    row.appendChild(gridBox);
    /*     gridBox.onmousedown = function () {
      gridBox.style.backgroundColor = "white";
    }; */

    gridBox.addEventListener("mouseover", (e) => {
      console.log(e.type);
      if ((e.type = "mousedown")) {
        gridBox.style.backgroundColor = "white";
      }
    });

    sketchPad.appendChild(row);
  }
}

/* let gridBox = document.querySelectorAll(".gridBox");
for (let i = 0; i < gridBox.length; i++) {
  gridBox.onmouseclick = function () {
    gridBox.style.backgroundColor = "white";
  };
}
 */
