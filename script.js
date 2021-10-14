// Defining SELECTORS:
const gridContainer = document.querySelector('#gridContainer');

// Defining VARIABLES:




// Generate <divs> for grid:
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');

    div.setAttribute('class', 'gridDivs')
    div.setAttribute('id', `div${i+1}`);

    div.style.cssText = "border: solid 1px black; width: 60px; height: 60px;";

    gridContainer.appendChild(div);
}





// Eventhandler:
const gridElements = document.querySelectorAll('.gridDivs');

gridElements.forEach((element) => {
    element.addEventListener('mouseover', function(e) {
        element.setAttribute('style', 'background-color: green; border: solid 1px black; width: 60px; height: 60px;')
    })
});