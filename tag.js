// var newElement = document.createElement("h2");
// console.log(newElement);
// var newText = document.createTextNode("What is DOM navigation in JavaScript?");
// console.log(newText);
// comment
// var newComment = document.createComment("Everything is temporary and fake ... except selfness");
// console.log(newComment );
  // newElement.appendChild(newText);
  // document.getElementById("test").appendChild(newElement);
  // document.getElementById("test").appendChild(newComment);

  // insert where text
//   var position = document.getElementById("test");
//   position.insertBefore(newElement,position.childNodes[0])
//  console.log(newElement);
// newElement what place 
// to which before position.childNodes
//insert adjacentElement:
// newElement.appendChild(newText);
// var target = document.getElementById("test");
//  target.insertAdjacentElement("afterbegin",newElement);

/* newElement = document.createElement("h3");
var textnode = document.createTextNode("DOM is very important in javascript, by DOM it add many responsitive tag and functions");
newElement.appendChild(textnode);*/
// the following is the shortcuts for above three lines
var target = document.getElementById("test").insertAdjacentElement("afterend",newElement);
var html = "<h4>This the Html insertion:</h4>";
var target = document.getElementById("test").insertAdjacentHTML("afterend", html);