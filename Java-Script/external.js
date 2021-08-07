var mobiles = ["Vivo", "Oppo", "Mi", "Realme"];
mobiles.forEach(myfunction);
function myfunction(item, index){
    document.getElementById("demo").innerHTML+= item+ "<br/>";
}