

    var addButton = document.getElementById("add");
    addButton.onclick = AddButtonClicked;
    var removeButton = document.getElementById("remove");
    removeButton.onclick = RemoveButtonClick
    var singleButton = document.getElementById("singleremove");
    singleButton.onclick= singleButtonClick;
    
    list =[];

    function AddButtonClicked()
    {
       // if is a number(int) must haver 'parseInt' EXAMPLE:value1 = parseInt(document.getElementById("num1").value);

        var value2 = document.getElementById("item").value;
        if (validationCheck(value2)==true)
       {
        list.push(value2);
        //reset value input as space
        document.getElementById("item").value ="" ;
        }

        console.log(list);
        //clear screen
        var itemToAdd = document.getElementById("itemlist")
         var stayitem = itemToAdd.lastElementChild;
         while (stayitem)
         {
             itemToAdd.removeChild(stayitem);
             stayitem= itemToAdd.lastElementChild;
         }

        itemToAdd.innerHTML = ""
        
        
        for (i=0;i<list.length;i++)
        {
            var itemlist= document.createElement("li")
            var itemToAdd = document.getElementById("itemlist")
            itemToAdd.appendChild(itemlist)
            var itemInListarray = document.createTextNode(list[i])
            itemlist.appendChild(itemInListarray)
        }

    }
    //https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
// remove all items
    function RemoveButtonClick()
    {
        var itemToAdd = document.getElementById("itemlist")
        var stayitem = itemToAdd.lastElementChild;
        while (stayitem)
        {
        itemToAdd.removeChild(stayitem);
        stayitem= itemToAdd.lastElementChild;
        }
        //  var list= document.getElementById("itemlist");
        // while(list.hasChildNodes()) 
        // { 
        //     list.removeChild(list.firstChild);
            
        // }

        list =[];
        //funtion to empty array
        //for(i=0;i<list.length;i=i++)
        //{
        //    list =[];
       // }
        // function empty()
        // {
        //     list.length=0;
        // }
        // empty();
       
    }

    function singleButtonClick()
    {
        var value2 = document.getElementById("item").value;
       

       //get item from user as value2
       // check if not -1
       if (list.indexOf(value2)!=-1)
       {
        list.splice(list.indexOf(value2),1);

         //clear screen
         var itemToAdd = document.getElementById("itemlist")
        var stayitem = itemToAdd.lastElementChild;
        while (stayitem)
        {
            itemToAdd.removeChild(stayitem);
            stayitem= itemToAdd.lastElementChild;
        }
       
         var i;
        for (i=0;i<list.length;i++)
        {
            var itemlist= document.createElement("li")
             var itemToAdd = document.getElementById("itemlist")
             itemToAdd.appendChild(itemlist)
            var displayitem = document.createTextNode(list[i])
            itemlist.appendChild(displayitem)
         }
       }
    }
        function validationCheck(checkvalue2)
        {
        // to check a text to key in
            if (checkvalue2 == "")
            {

                return false;

            }
            else
            {
                return true;
            }
        }

        // ...
       // function toggleClick()
        //{
            
      //      document.getElementById(itemlist).style.color="red";
      //  }

