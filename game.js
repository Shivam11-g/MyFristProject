// function myFunction() {
//   var btn = document.createElement("BUTTON");
//   document.body.appendChild(btn);

// }
// function fx1{
// 	let x = Math.floor((Math.random()*6)+1);
// 	y+=x;
// }
var y = 0;
let t = 20;
function roll() {
    "use strict";
    var x = Math.floor(Math.random() * 6) + 1;
    y+=x;
    document.getElementById('score').innerHTML = y;
    document.getElementById('img').src="dice-"+x+".png";
    if (t==20) {
        timer();
    }
    else if(t<0){

        document.getElementById("rollDice").disabled=true;

    }
}
function timer() {
    if (t<0) {
        document.getElementById("rollDice").disabled=true;
        modal.style.display = "block";
        return 0;
    }
    else {
        document.getElementById("timer").innerHTML=t+"s";
        --t;
    }
    setTimeout(function(){timer();},1000);
}
function reload(){
	document.location.reload() ;
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}