






addButton = document.getElementById("add");
addButton.onclick = addButtonClick;

var removeButton = document.getElementById("remove");
removeButton.onclick= removeButtonClick;

var singleButton = document.getElementById("single remove");
singleButton.onclick = singleButtonClick;

// var button = document.getElementById("ourButton");
// button.onclick = ourButtonClick;


// initial array to store list of items
// FUNCTION TO ADD ITEM 
list =[];

function addButtonClick()
{

  var inputValue = document.getElementById("item").value;
  //var inputValue = user input;

  if (validationCheck(inputValue)==true)
  {
    // add item 
     //Now construct a quick list element
    //Defining a listener for our button, specifically, an onclick handler
  // document.getElementById("itemlist").onclick = function()
  // {
       //First things first, we need our text:
        //var inputValue = document.getElementById("item").value; //.value gets input values
        list.push(inputValue);
         //Now construct a quick list element
        // var li = "<li>" + inputValue + "</li>";

         //Now use appendChild and add it to the list!
        //document.getElementById("itemlist").innerHTML += li;
 



  //  clear the item space
     document.getElementById("item").value="";
  
      var itemToAdd=document.getElementById("itemlist");
  }

  
  //clear 
  itemToAdd.innerHTML = ""
  var i;
  for(i=0;i<list.length;i++)
  {
   // var li ="<li>"+inputValue+"<li>";
  //  document.getElementById("itemlist").innerHTML=li;

    var itemlist =document.createElement("li");
   var itemToAdd =document.getElementById("itemlist");
    itemToAdd.appendChild(itemlist);
    var displayitem = document.createTextNode(list[i]);
    itemlist.appendChild(displayitem);

  }

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
{
var itemToAdd= document.getElementById("itemlist");
var stayitem=itemToAdd.lastElementChild;
  while (stayitem){
  itemToAdd.removeChild(stayitem);
  stayitem= itemToAdd.lastElementChild;
  list.length=0;
  }

//for (i=0;i<list.length;i++)
//{
 //delete list[i];
//}
list=[];
}

function singleButtonClick()
{
  //ask user input item to dele to valuetodel
  var valueToDel = document.getElementById("item").value;
  var stayitem=itemToAdd.lastElementChild;
  for (i=0;i<list.length;i++)
{
 if (valueToDel==list.value)
 delete list[i];
}

list=[];


}
