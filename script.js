const grid = document.querySelector('.grid-wrapper');
const slider = document.querySelector('.slider');
const value = document.querySelector('.slider-value');
value.textContent = slider.value;
console.log(parseInt(slider.value));
const flexBasis = 100 / parseInt(slider.value);
console.log(flexBasis);

const stylesheet = document.styleSheets[0];
console.log(typeof stylesheet);
const squareRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === '.square'
);

slider.addEventListener('change', function () {
  const slider = document.querySelector('.slider');
  value.textContent = slider.value;
});

function gridCreator(gridNum, flexBasis) {
  i = 0;
  while (i < gridNum * gridNum) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    squareRule.style.setProperty('flex-basis', flexBasis + '%');
    console.log(flexBasis);
    i++;
  }
}

gridCreator(parseInt(slider.value), flexBasis);
