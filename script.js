// Defining SELECTORS:
const gridContainer = document.querySelector('#gridContainer');
const rainbowButton = document.querySelector('#rainbow');
const standardButton = document.querySelector('#standard');
const eraseButton = document.querySelector('#erase');
const g16Button = document.querySelector('#g16');
const g32Button = document.querySelector('#g32');
const g64Button = document.querySelector('#g64');
const g96Button = document.querySelector('#g96');
const reloadButton = document.querySelector('#reload');


// Defining VARIABLES:

let currentGridSize = 64;

// Changing Grid Size:
// const gridSize = document.querySelectorAll('.gridSize');
// gridSize.forEach((element) => {
//     element.addEventListener('click', etchSketch, function(e) {
//         currentGridSize = this.value;
//         console.log(this.value);
//         gridContainer.innerHTML = '';
        
//     });
// })



// Generate <divs> for grid:
function etchSketch() {
for (let i = 0; i < (currentGridSize * currentGridSize); i++) {
    const div = document.createElement('div');

    if (currentGridSize === 16) {
        gridContainer.classList.add('grid16');
        div.style.cssText = "width: 60px; height: 60px;";
    } else if (currentGridSize === 32) {
        gridContainer.classList.add('grid32');
        div.style.cssText = "width: 30px; height: 30px;";
    } else if (currentGridSize === 64) {
        gridContainer.classList.add('grid64');
        div.style.cssText = "width: 15px; height: 15px;";
    } else if (currentGridSize === 96) {
        gridContainer.classList.add('grid96');
        div.style.cssText = "width: 10px; height: 10px;";
    }


    div.setAttribute('class', 'gridDivs');
    div.setAttribute('id', `div${i + 1}`);
    
    gridContainer.appendChild(div);

    standardButton.addEventListener('click', standard);
    rainbowButton.addEventListener('click', rainbow);
    eraseButton.addEventListener('click', erase);
    reloadButton.addEventListener('click', refresh);
}
}
etchSketch();






// Eventhandler:
gridElements = document.querySelectorAll('.gridDivs');

function rainbow() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // RndmColors:
            let rndmColor1 = Math.floor(Math.random() * 256);
            let rndmColor2 = Math.floor(Math.random() * 256);
            let rndmColor3 = Math.floor(Math.random() * 256);

            // Assigning CSS to divs:
            if (currentGridSize === 16) {
                element.setAttribute('style', `background-color: rgb(${rndmColor1},${rndmColor2},${rndmColor3});; width: 60px; height: 60px;`);
            } else if (currentGridSize === 32) {
                element.setAttribute('style', `background-color: rgb(${rndmColor1},${rndmColor2},${rndmColor3});; width: 30px; height: 30px;`);
            } else if (currentGridSize === 64) {
                element.setAttribute('style', `background-color: rgb(${rndmColor1},${rndmColor2},${rndmColor3});; width: 15px; height: 15px;`);
            } else if (currentGridSize === 96) {
                element.setAttribute('style', `background-color: rgb(${rndmColor1},${rndmColor2},${rndmColor3});; width: 10px; height: 10px;`);
            }
        })
    });
}

function standard() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // Assigning CSS to divs:
            if (currentGridSize === 16) {
                element.setAttribute('style', `background-color: black; width: 60px; height: 60px;`);
            } else if (currentGridSize === 32) {
                element.setAttribute('style', `background-color: black; width: 30px; height: 30px;`);
            } else if (currentGridSize === 64) {
                element.setAttribute('style', `background-color: black; width: 15px; height: 15px;`);
            } else if (currentGridSize === 96) {
                element.setAttribute('style', `background-color: black; width: 10px; height: 10px;`);
            }
        })
    });
}

function erase() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function (e) {
            // Assigning CSS to divs:
            if (currentGridSize === 16) {
                element.setAttribute('style', `background-color: white; width: 60px; height: 60px;`);
            } else if (currentGridSize === 32) {
                element.setAttribute('style', `background-color: white; width: 30px; height: 30px;`);
            } else if (currentGridSize === 64) {
                element.setAttribute('style', `background-color: white; width: 15px; height: 15px;`);
            } else if (currentGridSize === 96) {
                element.setAttribute('style', `background-color: white; width: 10px; height: 10px;`);
            }
        })
    });
}

function refresh() {
    gridElements.forEach((element) => {
        if (currentGridSize === 16) {
            element.setAttribute('style', `background-color: white; width: 60px; height: 60px;`);
        } else if (currentGridSize === 32) {
            element.setAttribute('style', `background-color: white; width: 30px; height: 30px;`);
        } else if (currentGridSize === 64) {
            element.setAttribute('style', `background-color: white; width: 15px; height: 15px;`);
        } else if (currentGridSize === 96) {
            element.setAttribute('style', `background-color: white; width: 10px; height: 10px;`);
        }
    })
}

// Initialize with a standard color:
standard();