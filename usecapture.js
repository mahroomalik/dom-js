document.querySelector("#outer").addEventListener("dblclick",function (){
    document.getElementById("outer").style.backgroundColor ="orange";
});
document.querySelector("#inner").addEventListener("click",function (){
    document.getElementById("inner").style.backgroundColor ="lightblue";
}) ,true;
document.querySelector("#outer").addEventListener("dblclick");
function com()
{
alert("welcome outer div");
}
document.querySelector("#outer").addEventListener("dblclick",function (){
    confirm("good Job 👍");
});
// document.querySelector("#outer").removeEventListener("dblclick",function (){    
// }); 
