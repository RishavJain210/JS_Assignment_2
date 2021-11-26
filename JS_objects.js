// Create an object ‘Person’ in Java Script,  which will have 
// ‘FirstName’, ’LastName’ and ‘Office Address’ as properties within it.
// Create three Persons and print all those three properties.

function Person(FirstName,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var person1 = new Person("Rishav","Jain","Patna");
var person2 = new Person("Devika","Baid","Warangal");
var person3 = new Person("Vidhi","Baid","Kharagpur");

console.log(person1);
console.log(person2);
console.log(person3);

