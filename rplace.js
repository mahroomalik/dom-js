var newElement = document.createElement("li");
var newText = document.createTextNode("Mango");
newElement.appendChild(newText );

var target = document.getElementById("list");
var oldElement = target.children[0];
console.log(oldElement );