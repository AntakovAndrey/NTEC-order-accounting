\connect "NTEC-Order-Accounting-DB"

CREATE TABLE IF NOT EXISTS positions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_positions_name ON positions(name);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    patronymic TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    position_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES positions(id)
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT,
    unp TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS order_statuses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_order_statuses_name ON order_statuses(name);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INT NOT NULL,
    status_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (status_id) REFERENCES order_statuses(id)
);

CREATE TABLE IF NOT EXISTS payment_types (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_payment_types_name ON payment_types(name);

CREATE TABLE IF NOT EXISTS order_payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_type_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (payment_type_id) REFERENCES payment_types(id)
);

CREATE TABLE IF NOT EXISTS order_status_history (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    status_id INT NOT NULL,
    change_date DATE NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (status_id) REFERENCES order_statuses(id)
);

CREATE TABLE IF NOT EXISTS service_statuses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_service_statuses_name ON service_statuses(name);

CREATE TABLE IF NOT EXISTS order_services (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    service_id INT NOT NULL,
    status_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (status_id) REFERENCES service_statuses(id)
);