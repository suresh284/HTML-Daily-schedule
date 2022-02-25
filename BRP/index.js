const add = document.querySelector(".add-btn");
var input = document.querySelector(".input");
var date = document.querySelector(".date");
const Container = document.querySelector(".display_container");

// -------

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


class addData{

    constructor(remainder){
        this.createDiv(remainder);
    }


    createDiv(remainder){

        let h2 = document.createElement("h2");
        h2.classList.add("name");
        h2.value = remainder;
        h2.innerText = input.value;

        let h5 = document.createElement("h5");
        h5.classList.add("countDown");
        h5.innerText = date.value;
        
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

class count extends addData{

    constructor(){
        
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

function countDown(){

}