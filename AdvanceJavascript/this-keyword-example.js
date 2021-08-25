class user{

    constructor(){
        this.firstName = "Rajesh"
        this.lastName = "Yadav"
    }
    getFullName(){
        console.log("User full name is " +this.firstName+ " " +this.lastName)
    }

}
u1=new user
u1.getFullName();