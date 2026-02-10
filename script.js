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


window.onload = () => {
    setTimeout(spellOut, 1000, 0);
}




