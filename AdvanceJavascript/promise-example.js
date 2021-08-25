var promise = new Promise(function(solved,rejected){
    const x = "Suresh"
    const y = "Jogini"

    if(x === y ){
        solved();
    }
    else{
        rejected();
    }
});
promise.then(function(){
    console.log("Promise solved")
}).catch(function(){
    console.log("Promise rejected")
})
