-- Создаем базу данных NTEC-Order-Accounting-DB, если она не существует
CREATE DATABASE IF NOT EXISTS "NTEC-Order-Accounting-DB";

-- Подключаемся к созданной базе данных
\c "NTEC-Order-Accounting-DB";

-- Создаем таблицу "Positions" (Должность)
CREATE TABLE IF NOT EXISTS Positions (
    position_id SERIAL PRIMARY KEY,
    position_name VARCHAR(255) NOT NULL
);

-- Создаем таблицу "Users" (Пользователи)
CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    position_id INTEGER REFERENCES Positions (position_id) ON DELETE CASCADE
);

-- Создаем таблицу "Category" (Категория)
CREATE TABLE IF NOT EXISTS Category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Создаем таблицу "ServiceStatus" (Статусы Услуг)
CREATE TABLE IF NOT EXISTS ServiceStatus (
    status_id SERIAL PRIMARY KEY,
    status_name VARCHAR(255) NOT NULL
);

-- Вставляем стандартные статусы
INSERT INTO ServiceStatus (status_name) VALUES ('Новая'), ('В работе'), ('Выполнена');

-- Создаем таблицу "Service" (Услуга)
CREATE TABLE IF NOT EXISTS Service (
    service_id SERIAL PRIMARY KEY,
    service_name VARCHAR(255) NOT NULL,
    cost DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category_id INTEGER REFERENCES Category (category_id) ON DELETE CASCADE,
    status_id INTEGER REFERENCES ServiceStatus (status_id) ON DELETE RESTRICT
);

-- Создаем таблицу "Customer" (Заказчик)
CREATE TABLE IF NOT EXISTS Customer (
    customer_id SERIAL PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    representative_full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    inn VARCHAR(20) NOT NULL
);

-- Создаем таблицу "Order" (Заказ)
CREATE TABLE IF NOT EXISTS "Order" (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    order_number VARCHAR(255) NOT NULL,
    customer_id INTEGER REFERENCES Customer (customer_id) ON DELETE CASCADE,
    status_id INTEGER REFERENCES OrderStatus (status_id) ON DELETE RESTRICT
);

-- Создаем таблицу "OrderStatus" (Статус заказа)
CREATE TABLE IF NOT EXISTS OrderStatus (
    status_id SERIAL PRIMARY KEY,
    status_name VARCHAR(255) NOT NULL
);

-- Вставляем стандартные статусы
INSERT INTO OrderStatus (status_name) VALUES ('Новый'), ('В обработке'), ('Выполнен');

-- Создаем таблицу "OrderStatusHistory" (История изменения статусов заказа)
CREATE TABLE IF NOT EXISTS OrderStatusHistory (
    history_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES "Order" (order_id) ON DELETE CASCADE,
    status_id INTEGER REFERENCES OrderStatus (status_id) ON DELETE RESTRICT,
    change_date DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Создаем таблицу "OrderService" (Заказ-Услуга)
CREATE TABLE IF NOT EXISTS OrderService (
    order_service_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES "Order" (order_id) ON DELETE CASCADE,
    service_id INTEGER REFERENCES Service (service_id) ON DELETE CASCADE,
    status_id INTEGER REFERENCES ServiceStatus (status_id) ON DELETE RESTRICT
);

-- Создаем таблицу "PaymentType" (Тип оплаты)
CREATE TABLE IF NOT EXISTS PaymentType (
    type_id SERIAL PRIMARY KEY,
    type_name VARCHAR(255) NOT NULL
);

-- Вставляем типы оплаты
INSERT INTO PaymentType (type_name) VALUES ('Одноразовая'), ('Ежемесячная');

-- Создаем таблицу "OrderPayment" (Оплата заказа)
CREATE TABLE IF NOT EXISTS OrderPayment (
    payment_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES "Order" (order_id) ON DELETE CASCADE,
    payment_date DATE NOT NULL DEFAULT CURRENT_DATE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    payment_type_id INTEGER REFERENCES PaymentType (type_id) ON DELETE RESTRICT
);
