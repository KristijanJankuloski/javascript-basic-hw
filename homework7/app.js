class Student {
    constructor(name, lastName, age, height, weight) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    calculateBMI = function () {
                return this.weight / this.height;
            };
}

const kiko = {
    name: "Kristijan",
    lastName: "Jankuloski",
    age: 25,
    height: 1.79
}

const newStudent = new Student("John", "Doe", 22, 1.76, 75);

console.log(kiko);
console.log(newStudent);
console.log(kiko.calculateBMI());