// kutchipatchi
const kutchipatchi = document.querySelector('#kutchipatchi1');
const kutchipatchiText = document.querySelector('#textKutchipatchi');

kutchipatchi.addEventListener("mouseover", function () {
    const image = document.querySelector("#kutchipatchiImg");
    image.style.visibility = "visible";
    kutchipatchiText.style.visibility = "visible";
    kutchipatchiText.style.position = "fixed";
    kutchipatchiText.style.top = "65%";
    kutchipatchiText.style.left = "35%";
});

kutchipatchi.addEventListener("mouseout", function () {
    const image = document.querySelector("#kutchipatchiImg");
    image.style.visibility = "hidden";
    kutchipatchiText.style.visibility = "hidden";
});

// mametchi
const mametchi = document.querySelector('#mametchi1');
const mametchiText = document.querySelector('#textMametchi');

mametchi.addEventListener("mouseover", function () {
    const image1 = document.querySelector("#mametchiImg");
    image1.style.visibility = "visible";
    mametchiText.style.visibility = "visible";
    mametchiText.style.position = "fixed";
    mametchiText.style.top = "65%";
    mametchiText.style.left = "35%";
});

mametchi.addEventListener("mouseout", function () {
    const image1 = document.querySelector("#mametchiImg");
    image1.style.visibility = "hidden";
    mametchiText.style.visibility = "hidden";
});

// memetchi
const memetchi = document.querySelector('#memetchi1');
const memetchiText = document.querySelector('#textMemetchi');

memetchi.addEventListener("mouseover", function () {
    const image2 = document.querySelector("#memetchiImg");
    image2.style.visibility = "visible";
    memetchiText.style.visibility = "visible";
    memetchiText.style.position = "fixed";
    memetchiText.style.top = "65%";
    memetchiText.style.left = "35%";
});

memetchi.addEventListener("mouseout", function () {
    const image2 = document.querySelector("#memetchiImg");
    image2.style.visibility = "hidden";
    memetchiText.style.visibility = "hidden";
});

// sebiretchi
const sebiretchi = document.querySelector('#sebiretchi1');
const sebiretchiText = document.querySelector('#textSebiretchi');

sebiretchi.addEventListener("mouseover", function () {
    const image3 = document.querySelector("#sebiretchiImg");
    image3.style.visibility = "visible";
    sebiretchiText.style.visibility = "visible";
    sebiretchiText.style.position = "fixed";
    sebiretchiText.style.top = "65%";
    sebiretchiText.style.left = "35%";
});

sebiretchi.addEventListener("mouseout", function () {
    const image3 = document.querySelector("#sebiretchiImg");
    image3.style.visibility = "hidden";
    sebiretchiText.style.visibility = "hidden";
});

// violetchi
const violetchi = document.querySelector('#violetchi1');
const violetchiText = document.querySelector('#textVioletchi');

violetchi.addEventListener("mouseover", function () {
    const image4 = document.querySelector("#violetchiImg");
    image4.style.visibility = "visible";
    violetchiText.style.visibility = "visible";
    violetchiText.style.position = "fixed";
    violetchiText.style.top = "65%";
    violetchiText.style.left = "35%";
});

violetchi.addEventListener("mouseout", function () {
    const image4 = document.querySelector("#violetchiImg");
    image4.style.visibility = "hidden";
    violetchiText.style.visibility = "hidden";
});

// button 
const button = document.querySelector("#button");
let audioPlaying = true;

button.addEventListener("click", function () {
    if (audioPlaying === true) {
        const audio = document.querySelector("#audio");
        audio.pause();
        button.textContent = "⏵";
        audioPlaying = false;
    }
    else {
        const audio = document.querySelector("#audio");
        audio.play();
        button.textContent = "⏸";
        audioPlaying = true;
    }

})

// instructions
const instructions = document.querySelector('#instructions');
const img = document.querySelector("#diagram");

instructions.addEventListener("click", function () {
    img.style.visibility = "visible";
    instructions.style.visibility = "hidden";
});

img.addEventListener("click", function () {
    img.style.visibility = "hidden";
    instructions.style.visibility = "visible";
});