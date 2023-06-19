const grid = document.querySelector('.grid-wrapper');
const slider = document.querySelector('.slider');
const value = document.querySelector('.slider-value');
value.textContent = slider.value;
console.log(parseInt(slider.value));
let flexBasis = 100 / parseInt(slider.value);
console.log(flexBasis);

const stylesheet = document.styleSheets[0];
console.log(typeof stylesheet);
const squareRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === '.square'
);

squareRule.style.setProperty('flex-basis', '6.25%');

slider.addEventListener('change', function () {
  const slider = document.querySelector('.slider');
  value.textContent = slider.value;
});

function gridCreator(gridNum) {
  i = 0;
  while (i < gridNum * gridNum) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    i++;
  }
}
gridCreator(parseInt(slider.value));
