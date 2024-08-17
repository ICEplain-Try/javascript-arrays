const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex;
let alexHobbies;
let alexAndJamesAge;

// 1. กำหนดค่าให้ alex
alex = employees[1].name;

// 2. กำหนดค่าให้ alexHobbies
alexHobbies = employees[1].hobbies;

// 3. กำหนดค่าให้ alexAndJamesAge
alexAndJamesAge = employees[0].age + employees[1].age;

// แสดงผลด้วย console.log
console.log (alex, alexHobbies, alexAndJamesAge);