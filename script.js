// var x = document.querySelectorAll("p.red");
// document.getElementById("demo").innerHTML = x[0].innerHTML;

function submit(){
    var x = document.forms["form1"];

    var text = "";
    var i;
    
    for(i=0; i<x.length; i++){
        text += x.elements[i].value+ "</br>";
    }
    document.getElementById("demo").innerHTML = text;
}
