const add = document.querySelector(".add-btn");
var input = document.querySelector(".input");
var date = document.querySelector(".date");
const Container = document.querySelector(".display_container");

class addData{

    constructor(remainder){
        this.createDiv(remainder);
    }


    createDiv(remainder){

        let h2 = document.createElement("h2");
        h2.classList.add("name");
        h2.value = remainder;
        h2.innerText = remainder;

        // // let span = document.createElement("span")
        // // span.classList.add("Span");
        // // span.value=remainder;
        // //  span.innerText=remainder;

        // let input = document.createElement("input");
        // input.value= remainder;
        // input.disabled=true;


        let h5 = document.createElement("h5");
        h5.classList.add("countDown");
        h5.innerText = remainder;

        let datadiv = document.createElement("div");
        datadiv.classList.add("add_data");

        //create wish button

        let wishButton = document.createElement("button");
        wishButton.classList.add("wish");
        wishButton.innerHTML= "Send Wishes";

        Container.appendChild(datadiv);
        datadiv.appendChild(h2);
        datadiv.appendChild(h5);
        datadiv.appendChild(wishButton);





    }

    wish(){

    }
}


function addEvent(){
    
    if(input.value && date.value !== ""){
        new addData (`${input.value}     ${date.value}`)
        input.value= "";
        date.value="";
    }
}
add.addEventListener('click', addEvent);

// function AddEvent(){

//     if(input.value !== ''){
//         new addData (input.value)
//         input.value="";
//     }
// }