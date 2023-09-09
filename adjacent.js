var newElement = document.createElement("h2");
var newText = document.createTextNode("this is just text Node");
var target = document.getElementById("test"); 
newElement.appendChild(newText);
// target.insertAdjacentElement("afterbegin", newElement);

// var newElement = "<h2>This is just text Node</h2>";
// target.insertAdjacentHTML("afterbegin", newElement);

// target.insertAdjacentHTML("afterbegin", newElement);

//  add text

var target = document.getElementById("test"); 
var text= "this is just";
target.insertAdjacentText("beforebegin",text);


   