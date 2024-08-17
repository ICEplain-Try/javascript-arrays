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
  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  },
];

// Start coding here

// ต้องการลบ object ที่เกี่ยวกับ "Kody" ใน arrays ที่ชื่อ employees
delete employees[3];

// ถ้าเป็น index ลำดับสุดท้ายก็สามารถใช้คำสั่ง employees.pop(); ก็ได้

// แสดงผลด้วย console.log();
console.log (employees);