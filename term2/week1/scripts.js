// Your Javascript goes here

var button = document.getElementById("ourButton");
var humanInput = document.getElementById("humanInput");



button.onclick = ourButtonClick;



function ourButtonClick() {

 // alert("click me Person");
//button.innerHTML = "Hell Yea let do it again!"
  
  var inputValue = parseFloat(humanInput.value) * 7;
  alert(inputValue+" "+"doggy years");
  
  button.innerHTML = "wow let try again!"
 
  

}
