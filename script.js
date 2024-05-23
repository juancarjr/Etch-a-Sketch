function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    return RGBColor;
}

function rangeNumber() {
    rangeValue.textContent = rangeSlider.value;
}

function canvasSize(squaresPerSide=16){
    rangeNumber()
    totalSquares = squaresPerSide**2;
    const SIZE_PERCENT = (canvas.clientWidth/squaresPerSide) + 'px';

    for (i = 0; i < totalSquares; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid-pixel';
        // grid.style.border =  '1px solid black';
        grid.style.height = SIZE_PERCENT;
        grid.style.width = SIZE_PERCENT;
        canvas.append(grid);

        grid.addEventListener('mouseover', () => {
            if (rainbowMode.checked == true) {
                grid.style.backgroundColor = randomRGB();
                grid.style.opacity =  +grid.style.opacity + 0.1;
            } else {
                grid.style.backgroundColor = chosenColor.value;
                grid.style.opacity = +grid.style.opacity + 0.1;
            }
        });
    };
}

function canvasReset() {
    canvas.innerHTML = ''
}

const frame = document.querySelector('.frame')
const canvas = document.querySelector('.container');
const rangeSlider = document.querySelector('#myRange');
const rangeValue = document.querySelector('#range-value');
const chosenColor = document.querySelector('#colorInput');
const gridBorders = document.querySelector('#grid-borders')
const rainbowMode = document.querySelector('#rainbow-mode');
const canvasDimension = document.querySelector('#canvas-dimensions');

canvasSize(rangeSlider.value)

rangeSlider.addEventListener('input', () => {
    rangeValue.textContent = rangeSlider.value;
    canvasReset()
    canvasSize(rangeSlider.value)

})

gridBorders.addEventListener('click', () => {
    const gridPixel = document.querySelectorAll('.grid-pixel')
        gridPixel.forEach(item => {
            if (gridBorders.checked == true) {
                item.style.border = '1px dashed black';
            } else {
                item.style.border = 'none';
        }
})

    }
)