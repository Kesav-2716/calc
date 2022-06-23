//This Function Is Clear All THe Values
function clearScreen(){
    document.getElementById("result").value="";
}
//This Function Display Values
function display(value){
    document.getElementById("result").value += value;
}
//This Function Result View
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value=q;
}