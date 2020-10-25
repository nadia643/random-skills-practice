// COUNTER
let count = 0;

function lowerCount() {

  count -= 1;
  document.getElementById("numberPos").innerHTML = count;
  
}

function addCount() {
  count += 1;
  document.getElementById("numberPos").innerHTML = count;
  
}

function reset() {
  count = 0;
  document.getElementById("numberPos").innerHTML = count;

}

// BACKGROUND COLOUR

function changeColour() {
  let a = Math.floor(Math.random() * 256);  
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  let bgColour = "rgb(" + a + "," + b + "," + c + ")";  
  document.body.style.backgroundColor =  bgColour; 

  document.getElementById("colourRgb").innerHTML = bgColour.toUpperCase();
}



// REVIEWS SLIDER
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
} 

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("image-slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";  
}


