
//Switch Statement 
function Vacation_Function () {
    var Trip_Output;
    var Trips = document.getElementById("Trip_Input").value;
    var Trip_String = "sounds fun!";
    switch (Trips) {
        case "Yosemite":
            Trip_Output = "Yosemite" + Trip_String;
        break; 
        case "Japan": 
            Trip_Output = "Japan" + Trip_String;
        break;
        case "Disney": 
            Trip_Output = "Disney" + Trip_String;
        break;
        case "Hawaii": 
            Trip_Output = "Hawaii" + Trip_String;
        break;
        case "Spain": 
            Trip_Output = "Spain" + Trip_String;
        break;
        case "Brazil": 
            Trip_Output = "Brazil" + Trip_String;
        break;
        default:
        Trip_Output = "Please enter location exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML = Trip_Output;
}

// GetElementsbyClassName () Method 
function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A [0].innerHTML = "The text has changed!";
}

//CANVAS ELEMENT with Graphic 
var c = document.getElementById("Canvas_Name");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

//CANVAS createLinearGardient() Method 
var c = document.getElementById("linear_gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);