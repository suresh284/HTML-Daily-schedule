var student = {

    "name" : "Rakesh",
    "class" : "11",
    "section" : "A"

}

console.log(student.name);

var students = [

    {"name" : "Ramesh", "Class" : "12", "batch" : "2019"},
    {"name" : "Rakesh", "Class" : "12", "batch" : "2020"},
    {"name" : "Rajesh", "Class" : "12", "batch" : "2021"}
]

students.forEach(function(student){
    console.log(student.name +" is the topper of batch "+ student.batch )
}
)