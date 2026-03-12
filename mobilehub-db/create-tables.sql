-- 1. Create Users Table
CREATE TABLE Users (
  user_id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255),
  phone VARCHAR(20),
  address VARCHAR(256)
);


-- 2. Create Products Table
CREATE TABLE Products (
  product_id VARCHAR(50) PRIMARY KEY,
  brand VARCHAR(50),
  model VARCHAR(100),
  price MONEY,
  stock INTEGER,
  description VARCHAR(256),
  image_url VARCHAR(255)
);
    
-- 3. Create Oders Table
CREATE TABLE Orders (
  order_id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50),
  total_price MONEY,
  status VARCHAR(20),
  payment_method VARCHAR(50),
  created_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
    
-- 4. Create Cart Table
CREATE TABLE Cart (
  cart_id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50),
  product_id VARCHAR(50),
  quantity INTEGER,
  added_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
    
