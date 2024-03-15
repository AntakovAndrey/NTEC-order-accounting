-- Подключаемся к созданной базе данных
\connect "NTEC-Order-Accounting-DB"

-- Создаем таблицу "Должность"
CREATE TABLE IF NOT EXISTS positions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Создаем индекс для таблицы "Должность"
CREATE INDEX IF NOT EXISTS idx_positions_name ON positions(name);

-- Создаем таблицу "Пользователи"
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    password TEXT NOT NULL,
    position_id INT NOT NULL,
    FOREIGN KEY (position_id) REFERENCES positions(id)
);

-- Создаем таблицу "Категория"
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Создаем индекс для таблицы "Категория"
CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);

-- Создаем таблицу "Услуга"
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Создаем таблицу "Заказчик"
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT,
    inn TEXT NOT NULL
);

-- Создаем таблицу "Статус заказа"
CREATE TABLE IF NOT EXISTS order_statuses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Создаем индекс для таблицы "Статус заказа"
CREATE INDEX IF NOT EXISTS idx_order_statuses_name ON order_statuses(name);

-- Создаем таблицу "Заказ"
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    order_number TEXT NOT NULL,
    customer_id INT NOT NULL,
    status_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (status_id) REFERENCES order_statuses(id)
);

-- Создаем таблицу "Тип оплаты"
CREATE TABLE IF NOT EXISTS payment_types (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Создаем индекс для таблицы "Тип оплаты"
CREATE INDEX IF NOT EXISTS idx_payment_types_name ON payment_types(name);

-- Создаем таблицу "Оплата заказа"
CREATE TABLE IF NOT EXISTS order_payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_type_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (payment_type_id) REFERENCES payment_types(id)
);

-- Создаем таблицу "История статусов заказа"
CREATE TABLE IF NOT EXISTS order_status_history (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    status_id INT NOT NULL,
    change_date DATE NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (status_id) REFERENCES order_statuses(id)
);

-- Создаем таблицу "Статус услуги"
CREATE TABLE IF NOT EXISTS service_statuses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Создаем индекс для таблицы "Статус услуги"
CREATE INDEX IF NOT EXISTS idx_service_statuses_name ON service_statuses(name);

-- Создаем таблицу "Заказ-услуга"
CREATE TABLE IF NOT EXISTS order_services (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    service_id INT NOT NULL,
    status_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (status_id) REFERENCES service_statuses(id)
);