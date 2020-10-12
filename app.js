let count = 0;

function lowerCount() {

  count -= 1;
  document.getElementById("numberPos").innerHTML = count;
  
}

function addCount() {
  count += 1;
  document.getElementById("numberPos").innerHTML = count;
  
}


function changeColour() {
  let a = Math.floor(Math.random() * 256);  
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  let bgColour = "rgb(" + a + "," + b + "," + c + ")";  
  document.body.style.backgroundColor =  bgColour; 

  document.getElementById("colourRgb").innerHTML = bgColour.toUpperCase();
}