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

// ให้เพิ่ม "Watching basketball" เข้าไปใน Value ของ Key hobbies ของพนักงานที่ชื่อ Alex
employees[1].hobbies.push("Watching basketball");


// แสดงผล Object ลำดับที่ 2 ของ Array employees
console.log(employees[1]);