class Employee {

    name = '';
    age = 0;
    department = '';
    
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
    
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }
}

export default Employee;

var emp1 = new Employee('John Doe', 30, 'Engineering');
console.log(emp1.getDetails());