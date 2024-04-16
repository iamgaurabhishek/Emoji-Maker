let emoji = document.querySelector(".emoji");

let colors = ["#4bff81", "#4bb4ff", "#ff702e", "#b88cff", "#ffd21f"];

let eyes = document.querySelector(".eyes");
let eyebrows = document.querySelector(".eyebrows");
let mouth = document.querySelector(".mouth");

let colorBtn = document.getElementById("colorbtn");
let eyesBtn = document.getElementById("eyes");
let eyebrowsBtn = document.getElementById("eyebrows");
let mouthBtn = document.getElementById("mouth");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

let totalCounts = {
    eyeCount:6,
    eyebrowsCount:4,
    mouthCount:5,
}

colorBtn.addEventListener("click", () => {
    emoji.style.backgroundColor = colors[counter1];
    counter1 = counter1 < colors.length-1 ? counter1 + 1 : 0;
    console.log(counter1);
});

eyesBtn.addEventListener("click", () => {
    eyes.setAttribute("src", `eyes${counter2}.png`);

    counter2 = counter2 < totalCounts.eyeCount-1 ? counter2+1 : 0;
})

eyebrowsBtn.addEventListener("click", ()=>{
    eyebrows.setAttribute("src", `eyebrows${counter3}.png`);

    counter3 = counter3 < totalCounts.eyeCount-1 ? counter3+1 : 0;
})

mouthBtn.addEventListener("click", ()=>{
    mouth.setAttribute("src", `mouth${counter4}.png`);
    
    counter4 = counter4 < totalCounts.eyeCount-1 ? counter4+1 : 0;
})