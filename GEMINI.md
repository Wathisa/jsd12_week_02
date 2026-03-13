# GEMINI.md

## Project Overview
This workspace is a development and design repository, likely part of a curriculum (JSD12 WEEK_02). It contains two distinct project contexts:

1.  **MobileHub (E-commerce):** A mobile phone e-commerce platform design focused on simplifying price and specification comparisons for brands like Samsung, iPhone, and Xiaomi.
2.  **Burger/Restaurant System (PostgreSQL):** A database schema and sample data for a restaurant management system, including suppliers, ingredients, menu items, and orders.

## Project Structure

### Documentation & Design
- `01_my-ecommerce.md`: Problem statement and solution overview for "MobileHub".
- `05_product-backlog.md`: Detailed epics and user stories for "MobileHub" (Products, Cart & Order, User, Admin).
- `02_business-model-canvas.excalidraw`: Visual business model design.
- `03_use-case-diagram.excalidraw`: System use case mapping.
- `04_er-diagram.excalidraw`: Entity-Relationship diagram for data modeling.

### Implementation
- `06_bring-it-to-javascript.js`: A JavaScript simulation of the "MobileHub" data structure, including product listings, users, carts, and orders.
- `posgresql/`: A directory containing SQL scripts for a restaurant system:
    - `create-tables.sql`: Core schema definition.
    - `01_suppliers.sql` to `07_order_items.sql`: Seed data for the restaurant system.
    - `query.sql`: Sample queries for the restaurant data.

## Building and Running

### JavaScript Simulation
To run the data structure simulation for MobileHub:
```bash
node 06_bring-it-to-javascript.js
```

### PostgreSQL Database
The SQL scripts are designed for PostgreSQL. To set up the restaurant database:
1.  Run `create-tables.sql` to initialize the schema.
2.  Run the numbered SQL files (`01_...` to `07_...`) in sequence to populate the data.
3.  Use `query.sql` for testing and data retrieval.

## Development Conventions
- **Language:** Documentation is provided in both English and Thai.
- **Data Modeling:** The project emphasizes clear separation between requirements (Backlog), data structure (JS), and database schema (SQL).
- **Naming:** Files are numbered sequentially (`01_`, `02_`, etc.) to indicate a recommended order of exploration or execution.
