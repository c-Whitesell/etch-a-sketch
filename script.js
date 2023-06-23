const grid = document.querySelector('.grid-wrapper');
let slider = document.querySelector('.slider');
const value = document.querySelector('.slider-value');

const stylesheet = document.styleSheets[0];
const gridRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === '.grid-wrapper'
);
// sets initial val of text on page to starting val of range slider
value.textContent = slider.value;
// creates the initial 256 div's needed for a 16x16 grid
gridCreator(parseInt(slider.value));
// creates a grid based off the starting value of the range slider (16x16)
gridRule.style.setProperty(
  'grid-template-columns',
  `repeat(${slider.value} , 1fr)`
);
// updates the value shown to the user upon changing range slider
slider.addEventListener('change', function () {
  slider = document.querySelector('.slider');
  value.textContent = slider.value;
  grid.textContent = '';
  gridCreator(parseInt(slider.value));
  gridRule.style.setProperty(
    'grid-template-columns',
    `repeat(${slider.value} , 1fr)`
  );
});
// creates the number of div's needed for the grid.
function gridCreator(gridNum) {
  i = 0;
  while (i < gridNum * gridNum) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    console.log(1);
    i++;
  }
}
