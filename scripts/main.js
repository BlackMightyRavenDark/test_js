const filePath = "/textures/font.png";
console.log(filePath);

const img = new Image();
img.onload = () => {
    console.log(img.width, img.height);
}
img.src = filePath;
