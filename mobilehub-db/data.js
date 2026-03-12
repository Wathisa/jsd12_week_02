// ข้อมูล USERS
export const users = [
  {
    user_id: "U001",
    name: "Somchai",
    email: "somchai@email.com",
    password: "pass123",
    phone: "0812345678",
    address: "Bangkok"
  },
  {
    user_id: "U002",
    name: "Suda",
    email: "suda@email.com",
    password: "pass456",
    phone: "0898765432",
    address: "Chiang Mai"
  }
];


// ข้อมูล PRODUCTS
export const products = [
  {
    product_id: "P001",
    brand: "Apple",
    model: "iPhone 15",
    price: 35900,
    stock: 10,
    description: "Apple smartphone",
    image_url: "iphone15.jpg"
  },
  {
    product_id: "P002",
    brand: "Samsung",
    model: "Galaxy S24",
    price: 32900,
    stock: 15,
    description: "Samsung flagship phone",
    image_url: "s24.jpg"
  },
  {
    product_id: "P003",
    brand: "Xiaomi",
    model: "Xiaomi 14",
    price: 25900,
    stock: 20,
    description: "Xiaomi performance phone",
    image_url: "xiaomi14.jpg"
  }
];


// ข้อมูล ORDERS
export const orders = [
  {
    order_id: "O001",
    user_id: "U001",
    total_price: 35900,
    status: "paid",
    payment_method: "credit_card",
    created_at: "2026-03-12"
  },
  {
    order_id: "O002",
    user_id: "U002",
    total_price: 32900,
    status: "pending",
    payment_method: "bank_transfer",
    created_at: "2026-03-12"
  }
];


// ข้อมูล CART
export const cart = [
  {
    cart_id: "C001",
    user_id: "U001",
    product_id: "P001",
    quantity: 1,
    added_at: "2026-03-12"
  },
  {
    cart_id: "C002",
    user_id: "U002",
    product_id: "P002",
    quantity: 2,
    added_at: "2026-03-12"
  }
];