let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here

// 1. ตรวจสอบว่า orders เป็น Array หรือไม่
let isArray;
isArray = Array.isArray(orders); // 'Is Array:', true


// 2. กำหนดให้ Variable creditCardTypeOfBlindermann มีค่าเท่ากับ Value ที่มาจาก Key creditCardType ของลูกค้าชื่อ Toinette Blindermann
let creditCardTypeOfBlindermann = orders[2].creditCardType; // 'switch'


// 3. ให้ Reassign ค่าของ Key creditCardType ของลูกค้าชื่อ Toinette Blindermann ให้เป็น “visa"
orders[2].creditCardType = "visa";


// 4. กำหนดให้ Variable productQuantityOfJoannet มีค่าเป็น Value ที่มาจาก Key productQuantity ของลูกค้าชื่อ Anjela Joannet
let productQuantityOfJoannet = orders[3].customerName; // 'Anjela Joannet'

// 5. กำหนดให้ Variable totalPurchaseOfDary มีค่าเป็น Value เกิดจากการคำนวนยอดซื้อสินค้ารวมของลูกค้าชื่อ Celia Dary 🕵🏼‍♀️  Hint: ยอดซื้อสินค้ารวมหมายถึง ราคาสินค้า x จำนวนสินค้า
let totalPurchaseOfDary =  orders[1].productPrice * orders[1].productQuantity; // 934902


// 6. ให้ลบ Object ของลูกค้าชื่อ Brenn Hugk ที่อยู่ใน Array orders
// ใช้วิธีนี้ เพื่อไม่ให้ลำดับของ index อื่นๆใน object อื่นๆใน arrays orders เคลื่อนที่ไป
orders[0] = "Remove id 1"; // 'Remove id 1'


// 7. แสดงผลตัวแปรต่างๆ เพื่อตรวจสอบ
console.log("Is Array:", isArray);
console.log(creditCardTypeOfBlindermann);
console.log(productQuantityOfJoannet);
console.log(totalPurchaseOfDary);
console.log(orders);