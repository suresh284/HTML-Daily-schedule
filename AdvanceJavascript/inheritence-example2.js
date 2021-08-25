class employee{

    constructor(){

        this.salary= 25000
    }


    Anuualslary(){

    console.log(this.salary*12)
    }
}

    class contractemployee extends employee{

        constructor(){
            super()
            this.contractperiod= 3 
        }

        getContractEmployeePeriod(){
            console.log("The contract period is " +this.contractperiod+ " years")
        }
        getContractEmployeeSalary(){
            console.log("The package for 3 years is " +this.salary*12*this.contractperiod+"rs")
        }


    }

e1= new contractemployee;
e1.Anuualslary();
e1.getContractEmployeePeriod();
e1.getContractEmployeeSalary();