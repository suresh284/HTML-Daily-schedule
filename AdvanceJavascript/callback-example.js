function add(a,b,callback){
    console.log(a+b);
    callback();
}
function display(){
    console.log("Total value is 100")
}
add(50,50,display)