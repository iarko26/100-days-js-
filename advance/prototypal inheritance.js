let person={
name:'John',
age:30,
greetings:function(){
    return`Hello ${this.name} your age is ${this.age}`;
}
}
let student=Object.create(person);
student.studentId='21-101'; //adding new property
console.log(student.studentId);
console.log(student.name);
console.log(student.age);
console.log(student.greetings());


