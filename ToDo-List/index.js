const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.data_container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    //create todo


    createDiv(itemName){

         //input data dynamically

        let input = document.createElement('input');
        input.value=itemName;
        input.type='text';
        input.disabled=true;
        input.classList.add('item_input');

        // create div

        let itembox = document.createElement('div');
        itembox.classList.add('item');

        //edit button dynamically

        let editButton = document.createElement('button');
        editButton.innerHTML="Edit";
        editButton.classList.add('editButton');

        //remove button dynamically

        let removeButton=document.createElement('button');
        removeButton.innerHTML="Remove";
        removeButton.classList.add('removeButton');

        container.appendChild(itembox);
        itembox.appendChild(input);
        itembox.appendChild(editButton);
        itembox.appendChild(removeButton);

        editButton.addEventListener('click',()=> this.edit(input))
        removeButton.addEventListener('click',()=> this.remove(itembox))
    }

    // edit function
    edit(input){
        input.disabled=!input.disabled;
    }

    // remove function


    remove(item){
        container.removeChild(item);
    }

}

function check (){
    if (input.value !=" "){
        new item(input.value);
        input.value=" ";
    }
}
addButton.addEventListener('click',check);