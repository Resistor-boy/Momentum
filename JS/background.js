const images =  [
    "Image-1.png",
    "Image-3.png",
    "Image-5.png",
    "Image-6.png",
    "Image-7.png",
    "Image-8.png",
    "Image-9.png",
    "Image-10.png"
];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImages}`;
document.body.appendChild(bgImage);