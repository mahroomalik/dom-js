
// function coma(){
// }
    document.getElementById("header").classList.toggle("ips");
    var a = document.getElementById("header").classList;
    console.log(a);
//  Note: for checking classes index 
var a = document.getElementById("header").classList.item(2);
console.log(a);
/* Note: to check class exixt or not 
 contains(class) answer as true /false  */ 
 var a = document.getElementById("header").classList.contains("xyz");
console.log(a);