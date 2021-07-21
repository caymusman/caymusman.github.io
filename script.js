function spellOut(i){
    let greet = "Hey, I'm Caymus";
    let white = document.getElementById("whiteText");
    let green = document.getElementById("greenText");
    if (i < greet.length) {
        white.textContent += greet.charAt(i);
        green.textContent += greet.charAt(i);
        setTimeout(spellOut, 120, i+1);
    }
}
//Spell out my name on window load.

let whiteBody = document.getElementById("white");
let whiteMoveable = false;
let whiteBodyDown = (e) => {e.preventDefault(); whiteMoveable = true; console.log("down")}
whiteBody.addEventListener("mousedown", whiteBodyDown)
let whiteBodyUp = () => {whiteMoveable = false; console.log("up")}
window.addEventListener("mouseup", whiteBodyUp)
let whiteBodyMove = (event) => {
    if(whiteMoveable){
        event.preventDefault();
        let bounds = whiteBody.getBoundingClientRect();
        whiteBody.style.height = ((event.clientY - bounds.top) / window.innerHeight) * 100
         + '%';
    }
}
let landing = document.querySelector(".landing");
landing.addEventListener("mousemove", whiteBodyMove);

//Add event listeners for dragging whiteBody div.


let carousel = document.querySelector('.carousel');
let cellCount = 7;
let cellIndex = 0;
let zOff;

function rotateCarousel() {
  let angle = cellIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-' + zOff + 'px) rotateY(' + angle + 'deg)';
}

var carPrev = document.querySelector('#carPrev');
carPrev.addEventListener( 'click', function() {
  cellIndex--;
  rotateCarousel();
});

var carNext = document.querySelector('#carNext');
carNext.addEventListener( 'click', function() {
  cellIndex++;
  rotateCarousel();
});

let carOne = document.querySelector(".carousel_cell:nth-child(1)");
let carTwo = document.querySelector(".carousel_cell:nth-child(2)");
let carThree = document.querySelector(".carousel_cell:nth-child(3)");
let carFour = document.querySelector(".carousel_cell:nth-child(4)");
let carFive = document.querySelector(".carousel_cell:nth-child(5)");
let carSix = document.querySelector(".carousel_cell:nth-child(6)");
let carSeven = document.querySelector(".carousel_cell:nth-child(7)");

function getZOff(){
    let width = carOne.offsetWidth;
    zOff = Math.round( ( width / 2 ) / Math.tan( ( ( Math.PI * 2 ) / cellCount ) / 2 ));
    zOff += .06 * zOff; //handles cell spacing
}

function handleResize(){
    getZOff();
    rotateCarousel();
    let division = 360 / (cellCount * 1.0);
    carOne.style.transform = "rotateY(0deg) translateZ(" + zOff + 'px)';
    carTwo.style.transform = "rotateY(" +  division + "deg) translateZ(" + zOff + 'px)';
    carThree.style.transform = "rotateY(" + 2 * division + "deg) translateZ(" + zOff + 'px)';
    carFour.style.transform = "rotateY(" + 3 * division + "deg) translateZ(" + zOff + 'px)';
    carFive.style.transform = "rotateY(" + 4 * division + "deg) translateZ(" + zOff + 'px)';
    carSix.style.transform = "rotateY(" + 5 * division + "deg) translateZ(" + zOff + 'px)';
    carSeven.style.transform = "rotateY(" + 6 * division + "deg) translateZ(" + zOff + 'px)';
}

window.addEventListener("resize", handleResize);

window.onload = () => {
    setTimeout(spellOut, 1000, 0);

    getZOff();
    handleResize();
    carousel.style.transform = 'translateZ(-' + zOff + 'px) rotateY(0deg)';
}




