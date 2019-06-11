<script>
var c = 0;
var t;
var timer_is_on = 0;
var count =0;

function displayCookie()
{
  document.getElementById('cookies').innerHTML ="cookies ready now " +count;
  // console.log("display");
}

function displayPoints()
{
  document.getElementById('points').innerHTML ="points now " +points;
  // console.log("display");
}
function addCookie()
{
  count = count +1
  displayCookie()
}
function addPoints()
{
  if (count >20)
  {
    points = points+1;
    count = count -20;
    console.log ="To get extra hands , you need 20 points";

    document.getElementById('points').innerHTML =" (1 extra hand helps made extra =2cookies !)" +"     " +"  hands you have now  ="+points;
    displayCookie();
  }
}

var points=0;
bakerpoints=0;

function addBaker()
{

  if (count>50)
  {
    bakerpoints = bakerpoints + 1;
    count =count-50;


    document.getElementById('baker').innerHTML ="(1 baker =4 cookies) " + "      "  + "      Baker you have now :-     "+ bakerpoints;
    displayCookie();

}

  }



function timedCount() 
{
  // document.getElementById("txt").value = c;
  
    count =count+(points*2)+(bakerpoints*4);
     displayCookie();
  // if (c )
  // {}

  t = setTimeout(timedCount, 1000);
}
timedCount();

 
</script>
