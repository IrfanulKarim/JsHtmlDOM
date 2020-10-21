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

// function uppercase(){
//     var x = document.getElementById("name");

//    x.value =  x.value.toUpperCase();
// }


////////////////////////////////// DOM addeventslistener

// document.getElementById("event").addEventListener("click",hello);

// function hello(){
//     alert("hbchasdbchjb a");
// }

// window.addEventListener("resize", myfunction);

// function myfunction(){
//     document.getElementById("demo").innerHTML= Math.random();
// }

var a =5;
var b = 4;

document.getElementById("btn").addEventListener("click", function(){
    myfunction(a,b);
})

function myfunction(a,b){
    var result= a*b;
    document.getElementById("demo").innerHTML  = result;
}

function remove(){
    document.getElementById("remove").removeEventListener("click", function(){
        myfunction(a,b);
    })
}
