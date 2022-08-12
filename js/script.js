"use strict";

class Employee {
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  static vacationDaysAmount = 18;

  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  calcYearlySalary() {
    console.log(this.salary * 12);
  }
}

const employeeJohn = new Employee(
  "John",
  "Brown",
  35,
  "Marketing Specialist",
  2000
);
const employeeMike = new Employee(
  "Mike",
  "Grey",
  28,
  "Administrative Assistant",
  1500
);

console.log(employeeJohn);
console.log(employeeMike);

employeeJohn.calcYearlySalary();
employeeMike.calcYearlySalary();

employeeJohn.fullName;
employeeMike.fullName;
