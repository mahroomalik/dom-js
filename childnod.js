 // how to target parents element 
var a = document.getElementById("child-C").parentElement.style.background= "gray";
var a = document.getElementById("child-C");
document.getElementById("main").parentNode;
var b = document.body.parentElement
// difference b/w parentElement and parentNode is ParentElement is return somevalue but parentNode return null if not find any value.
// var a = document.getElementById("inner").parentElement;
var c = document.getElementById("main").parentNode;
var d = document.getElementById("main").parentElement;
// children element 
// var e = document.getElementById("outer").children;
// var e = document.getElementById("outer").children[1];
 document.getElementById("inner").children[2].style.background= "red";
 var e =document.getElementById("inner").children[2].innerHTML="Mahroo";
// console.log(e);
console.clear();
// enter = return undefined , space return = ⤵️ consider as text 
// document.getElementById("inner").childNodes.style.background= "red";
 var e =document.getElementById("inner").childNodes;
// console.log(e);
var f =document.getElementById("inner").childNodes[1].style.background="green";
// only work on tags e,g <h>, <div> not on text , comments 
// console.log(f); 
var g =document.getElementById("inner").firstElementChild.innerHTML = "Hello ";
var g =document.getElementById("inner").firstElementChild.style.background = "orange";
// console.log(g); 
var g =document.getElementById("outer").lastElementChild.style.background = "green";
// first childNode target all element
//firstChild target all include text spaces enter etc 
// firstElementchild target only first element. e.g <div> 
var h =document.getElementById("child-C").firstChild;
// console.log(h);
// siblings 
var i =document.getElementById("child-C").nextElementSibling;
console.log(i);
var j =document.getElementById("child-C").previousElementSibling;
console.log(j);
var k = document.getElementById("child-C").previousSibling;
