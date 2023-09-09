// var element;
// for access all data 
// element = document.all[8];
// console.log(element);
// // for head
// element = document.head;
// console.log(element);
// element = document.title;
// console.log(element);
// element = document.body;
// console.log(element);
// element = document.links[1];
// console.log(element);
// element = document.images;
// console.log(element);
// element = document.forms;
// console.log(element);
// element = document.doctype;
// console.log(element);
// element = document.URL;
// console.log(element);
// element = document.domain;
// console.log(element);
// element = document.baseURI;
// console.log(element);
// console.clear();
// element = document.getElementById("menu");
// console.log(element);
// element = document.getElementsByClassName("sidebar");
// console.log(element);
// element = document.getElementsByTagName("ul");
// console.log(element);
// element = document.getElementsByClassName("list")[1];
// console.log(element);
// console.clear();
// //  note: after targetting as above what we can get with DOM?
// // Note: three things can we get 
// // . html 
// // . attribute
// // .text 
// // note: DOM Get methods 
// // . innerText 
// // . innerHTML
// // .getAttributeNode
// // .Attributes
// // element = document.getElementById("header").innerText;
// element = document.getElementById("content").innerHTML;
// // element = document.getElementById("footer").innerText;
// // element = document.getElementsByClassName("sidebar").innerHTML;
// element = document.getElementById("header").getAttribute("onClick");
// element = document.getElementById("header").getAttributeNode("onClick");
// element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").attributes[2];
// console.log(element);
// element = document.getElementById("header").attributes[1].value;
// // element = document.getElementById("header").attributes[2].name;
// console.log(element);
// console.clear();
// // note: DOM set methods 
// element = document.getElementById("header").innerText; // target it first
// // element = document.getElementById("header").innerText = "Code with Mahroo"; // cahnged its value
// // element = document.getElementById("header").innerHTML = "Code with Mahroo";
// element = document.getElementById("header").setAttribute("class","maha");
// element = document.getElementById("header").getAttribute("class","abc");
// console.log(element);
// // get and set methods in js
// element = document.getElementById("header").setAttribute("style","border:15px solid dotted red ");
// element = document.getElementById("header").getAttribute("class");
// console.log(element);
// console.clear();
// // another way to set value:
// element = document.getElementById("header").attributes[1].value= "beejo.com";
// console.log(element);
// console.clear();
// //remove attributes:
// element = document.getElementById("header").removeAttribute("class");
// element = document.getElementById("header").removeAttribute("style");
// console.log(element);
// console.clear();
// note: query selector  must mention class(.)and id(#) if  parameter use
// element = document.querySelector("#header").innerText=("welcome to Mahroo'web ");
// element = document.querySelector("#header").innerHTML=("<h1>welcome to Mahroo's content </h1>");
// console.clear();
// element = document.getElementById("header").removeAttribute("style");
// element = document.querySelectorAll(".list")[0].innerHTML;
// element = document.querySelectorAll("ul")[1].innerHTML;
// element = document.querySelectorAll("#header h1")[1];
// element = document.querySelector("#header").style.color;
//  note: for two words which are join together by - is written in camal case dor css
//  document.querySelector("#header").className = "abc xyz";
// element = document.querySelector("#header").className;
// console.log(element);
// console.clear();

// Note: classList
// document.querySelector("#header").classList = "abc xyz";
// element = document.querySelector("#header").classList;
// console.log(element);
// add class in another class
// document.querySelector("#header").classList.add("efgcompany", "hellocompany");
// element = document.querySelector("#header").classList;
// console.log(element);
//remove class
// document.querySelector("#header").classList.remove("xyz","abc");
// element = document.querySelector("#header").classList;
// console.log(element);
// console.clear();
//  1) add event listener first method:
document.getElementById("header").onmouseenter= abc ;
function abc(){
    document.getElementById("header").style.background = "blue";
};
console.clear();
/* 2) add event listener second method:
 syntax : document.getElementById(id).addEventListener("click", functionName);
 write click instead of onclick
witout declared function at a time declare function 
 document.getElementById.addEnentListener("click", Function()statement }); */
//  document.getElementById("header").addEventListener("click", abc);
//  function abc(){
//     document.getElementById("header").style.background = "pink";
//  }; 
//  document.getElementById("header").addEventListener("mouseenter", function(){
//     document.getElementById("header").style.border= "10px solid red";
//  }); 
//  document.getElementById("header").addEventListener("mouseenter", function(){
//     document.getElementById("header").style.border= "10px solid red" ,this.innerText= "Mahroo Malik", this.style.color = "blue";
//  }); 
 /*insted of  document.getElementById("header") if use many time we can use this e.g this..style.border= "10px solid red" ,this.innerText= "Mahroo Malik";
 });*/ 
/* Note: remove listener method:*/ 
document.getElementById("header").addEventListener("click", com); 
function com(){
   document.getElementById("header").style.border= "10px solid red";
}
document.getElementById("header").removeEventListener("click",com); 
