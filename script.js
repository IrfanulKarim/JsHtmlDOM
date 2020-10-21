//////////////////////////////// DOM Element

// var x = document.querySelectorAll("p.red");
// document.getElementById("demo").innerHTML = x[0].innerHTML;

// function submit(){
//     var x = document.forms["form1"];

//     var text = "";
//     var i;
    
//     for(i=0; i<x.length; i++){
//         text += x.elements[i].value+ "</br>";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

////////////////////////////////// DOM HTML

// document.getElementById("im1").src= "./images/logo.png";


////////////////////////////////// DOM animation

// function myMove(){
//     var elem = document.getElementById("animation");
//     var pos = 0;
//     var id = setInterval(frame, 5);

//     function frame(){
//         if(pos==350){
//             clearInterval(id);
//         }
//         else{
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

////////////////////////////////// DOM events

function uppercase(){
    var x = document.getElementById("name");

   x.value =  x.value.toUpperCase();
}