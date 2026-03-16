// ===================================
// MobileHub — Ecommerce Data Variables
// ===================================

// รายการ product IDs ทั้งหมด
let productList = [
"product_id_1",
"product_id_2",
"product_id_3",
"product_id_4",
"product_id_5",
"product_id_6",
];

// ข้อมูลสินค้า — Samsung
const product_A = {
productId: "product_id_1",
brand: "Samsung",
model: "Galaxy A15",
price: 6990,
stock: 50,
};

const product_B = {
productId: "product_id_2",
brand: "Samsung",
model: "Galaxy S24",
price: 29900,
stock: 20,
};

// ข้อมูลสินค้า — iPhone
const product_C = {
productId: "product_id_3",
brand: "iPhone",
model: "iPhone 15",
price: 32900,
stock: 15,
};

const product_D = {
productId: "product_id_4",
brand: "iPhone",
model: "iPhone 15 Pro",
price: 42900,
stock: 10,
};

// ข้อมูลสินค้า — Xiaomi
const product_E = {
productId: "product_id_5",
brand: "Xiaomi",
model: "Redmi Note 13",
price: 7990,
stock: 80,
};

const product_F = {
productId: "product_id_6",
brand: "Xiaomi",
model: "Redmi 13C",
price: 4990,
stock: 100,
};

// ข้อมูลลูกค้า (User)
const user_A = {
userId: "user_id_1",
name: "Somchai",
email: "somchai@email.com",
phone: "081-234-5678",
};

// ตะกร้าสินค้า (Cart)
let cart = [
{
productId: "product_id_5",
quantity: 1,
},
{
productId: "Product_id_1",
quantity: 2,
},
];

// ข้อมูลคำสั่งซื้อ (Order)
const order_A = {
orderId: "order_id_1",
userId: "user_id_1",
totalPrice: 21970,
status: "pending",
paymentMethod: "Credit_card",
};

// แสดงผลข้อมูล
console.log(productList);
console.log(product_A);
console.log(product_B);
console.log(product_C);
console.log(product_D);
console.log(product_E);
console.log(product_F);
console.log(user_A);
console.log(cart);
console.log(order_A);

//ในส่วนของ JavaScript ไฟล์นี้ใช้สำหรับจำลองโครงสร้างข้อมูลพื้นฐานของระบบ 
//เช่น ข้อมูลสินค้า ข้อมูลผู้ใช้ ตะกร้าสินค้า และคำสั่งซื้อ โดยใช้ตัวแปรแบบ Object และ Array 
// เพื่อแสดงรูปแบบข้อมูลที่ระบบ e-commerce อาจใช้ในอนาคต
