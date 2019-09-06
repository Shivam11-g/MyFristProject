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
        alert("Bole To GAME OVER");
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