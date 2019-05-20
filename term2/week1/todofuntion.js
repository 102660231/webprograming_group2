

var addButton =document.getElementById("add");
addButton.onclick = addButtonClick;

var removeButton = document.getElementById("remove");
removeButton.onclick= removeButtonClick;

var singleButton = document.getElementById("single remove");
singleButton.onclick = singleButtonClick;

var button = document.getElementById("ourButton");
button.onclick = ourButtonClick;


// initial array to store list of items
// FUNCTION TO ADD ITEM 
list =[];

function addButtonClick() {

 // alert("click me Person");display message 

  var inputValue = document.getElementById("item").value;
  //var inputValue = user input;

  //alert("Your item is :" +inputValue+" ");

  if (validationCheck(inputValue)==true)
  {
    // add item 
     //Now construct a quick list element
    var li = "<li>" + inputValue+ "</li>";

    //Now use appendChild and add it to the list!
    document.getElementById("list").appendChild(li);

    list.push(inputValue);
    document.getElementById("add").value="";
  }


  console.log(list)
  //clear screen
  var list = document.getElementById("list").lastElementChild.innerHTML;
  document.getElementById("demo").innerHTML = list;
}
 // var itemToAdd = document.getElementById("itemList");
  //var stayitem  = itemToAdd.lastElementChild;
 
 
      

}
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