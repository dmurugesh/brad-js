//Creating DOM variable 

const blurImage = document.getElementById('zero');

blurImage.addEventListener('click', manuplation);

function manuplation() {
    console.log('a');
    // blurImage.parentElement.innerHTML = `<img src="zero.jpg"><br><p>The original image appears</p>`;
    blurImage.src = "zero.jpg";
}