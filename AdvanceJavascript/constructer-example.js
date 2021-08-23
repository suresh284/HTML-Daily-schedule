class employee{
    
    constructor(){

    this.salary = 25000;
    this.paidleaves = 21;
    this.sickleaves = 9;
}
getAnnualSalary(){

    console.log(this.salary *12);
}
getPaidleaves(){

}

}
e1 = new employee;
e1.getAnnualSalary();