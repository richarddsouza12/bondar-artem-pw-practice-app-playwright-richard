class Employee {
    name: string;
    age: number;
    department: string;

    constructor(name: string, age: number, department: string) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    getEmployeeDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }

}

var employee1 : Employee = new Employee("John Doe", 30, "Engineering");
console.log(employee1.getEmployeeDetails());



// Using type to define the structure of an object
type Manager = {
    name: string;
    age: number;
    department: string;
    teamSize: number;

    getManagerDetails(): string;

}

var manager1 : Manager = {
    name: "Jane Smith",
    age: 40,
    department: "Marketing",
    teamSize: 10,
    getManagerDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
}


console.log(manager1.getManagerDetails());


// Using interface to define the structure of an object
interface Developer {
    name: string;
    age: number;
    department: string;
    programmingLanguage: string;    
    getDeveloperDetails(): string;
}

var developer1 : Developer = {
    name: "Alice Johnson",
    age: 28,
    department: "Software Development",
    programmingLanguage: "TypeScript",
    getDeveloperDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Programming Language: ${this.programmingLanguage}`;
    }
}

console.log(developer1.getDeveloperDetails());


// Plain object with methods
var car = {
    
make: "Toyota",
model: "Camry",
year: 2020, 

getCarDetails(): string {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
},

getCarName(): string {
    return `Car Name: ${this.make} ${this.model}`;
}

// You can add more properties and methods as needed

}

console.log(typeof car);
console.log(car.getCarDetails());

//===============================

// Loops 

var numbers : number[] = [1, 2, 3, 4, 5];

//generic for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//of Loop
for (let number of numbers) {
    console.log(number);
}

//for Each loop
numbers.forEach( (number,index) => {
    console.log(number);
    console.log(index);
})


function add(a: number, b: number): number {
  return a + b;
}


