

addButton = document.getElementById("item");
addButton.onclick = addButtonClick;

var removeButton = document.getElementById("remove all");
removeButton.onclick= removeButtonClick;

var singleButton = document.getElementById("single remove");
singleButton.onclick = singleButtonClick;

// var button = document.getElementById("ourButton");
// button.onclick = ourButtonClick;


// initial array to store list of items
// FUNCTION TO ADD ITEM 
list =[];

function addButtonClick() {


  var inputValue = document.getElementById("item").value;
  //var inputValue = user input;

  //alert("Your item is :" +inputValue+" ");

  if (validationCheck(inputValue)==true)
  {
    // add item 
     //Now construct a quick list element
    //Defining a listener for our button, specifically, an onclick handler
document.getElementById("item").onclick = function()
 {
  //First things first, we need our text:
  var inputValue = document.getElementById("item").value; //.value gets input values

  //Now construct a quick list element
  var li = "<li>" + text + "</li>";

  //Now use appendChild and add it to the list!
  document.getElementById("list").appendChild(li);
 }



   // list.push(inputValue);
   // document.getElementById("add").value="";
  }


  console.log(list)
  //clear screen
  
}
 // var itemToAdd = document.getElementById("itemList");
  //var stayitem  = itemToAdd.lastElementChild;
 
 
      

function validationCheck(checkInputValue)
{
    // to check text entered not a empty
    if (checkInputValue=="")
    {
        return false;
    }
    else
    {
        return true;
    }
}
function removeButtonClick()
{}

function singleButtonClick()
{}