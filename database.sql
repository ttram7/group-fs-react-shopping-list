-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity DECIMAL(15) NOT NULL,
    unit VARCHAR(20) NOT NULL
);

INSERT INTO groceries (name, quantity, unit)
VALUES ('Apples', 5, 'lbs'), 
('Bread', 1, 'loaf');