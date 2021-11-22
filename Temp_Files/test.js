const addButton = document.querySelector(".add-button")
var input = document.querySelector(".input-text")
const output = document.querySelector(".output-text")

class item{

    constructor(outputData){

        this.createDiv(outputData)

    }
//create todo

createDiv(outputData){


    //input data dynamically

    let input = document.createElement('input-text');
    input.value = itemName;
    input.classList.add('output-text');
    input.type="text";
    input.style.fontSize="25px"
    input.style.color="red"

    // create div

    let itemBox = document.createElement('div');
    itemBox.classList.add('output-container');

    // edit button

    let editButton = document.createElement('button');
    editButton.innerHTML='edit';
    editButton.classList.add('edit-Button')

    // remove button

    let removeButton = document.createElement('button');
    removeButton.innerHTML='remove';
    removeButton.classList.add('remove')

    container.appenChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);


}




}

function check(){

    if(input-text.value != '')
    {
        new item(input.value);
        input.value="";

    }
    
}

addButton.eventListener('click',check)