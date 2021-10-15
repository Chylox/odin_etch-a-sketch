// Defining SELECTORS:
const gridContainer = document.querySelector('#gridContainer');
const rainbowButton = document.querySelector('#rainbow');
const standardButton = document.querySelector('#standard');
const eraseButton = document.querySelector('#erase');
const g16Button = document.querySelector('#g16');
const g32Button = document.querySelector('#g32');
const g64Button = document.querySelector('#g64');
const g96Button = document.querySelector('#g96');


// Defining VARIABLES:
let currentGridSize = 16;

// const gridSize = document.querySelectorAll('.gridSize');
// gridSize.forEach((element) => {
//     element.addEventListener('click', function(e) {
//         currentGridSize = this.value;
//         console.log(currentGridSize);
//         etchSketch();
//     })
// })


// Generate <divs> for grid:
// function etchSketch() {
for (let i = 0; i < (currentGridSize * currentGridSize); i++) {
    const div = document.createElement('div');


    gridContainer.classList.add('grid16');
    div.style.cssText = "width: 60px; height: 60px;";



    div.setAttribute('class', 'gridDivs');
    div.setAttribute('id', `div${i + 1}`);

    gridContainer.appendChild(div);
}
// }






// Eventhandler:
const gridElements = document.querySelectorAll('.gridDivs');

function rainbow() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // RndmColors:
            let rndmColor1 = Math.floor(Math.random() * 256);
            let rndmColor2 = Math.floor(Math.random() * 256);
            let rndmColor3 = Math.floor(Math.random() * 256);

            // Assigning CSS to divs:
            element.setAttribute('style', `background-color: rgb(${rndmColor1},${rndmColor2},${rndmColor3}); width: 60px; height: 60px;`)
        })
    });
}

function standard() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // Assigning CSS to divs:
            element.setAttribute('style', `background-color: black; width: 60px; height: 60px;`)
        })
    });
}

function erase() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // Assigning CSS to divs:
            element.setAttribute('style', `background-color: white; width: 60px; height: 60px;`)
        })
    });
}



standardButton.addEventListener('click', standard);
rainbowButton.addEventListener('click', rainbow);
eraseButton.addEventListener('click', erase);