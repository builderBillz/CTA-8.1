DROP DATABASE IF EXISTS laptop_store;
CREATE DATABASE laptop_store;

\c laptop_store;

DROP TABLE IF EXISTS laptops;

CREATE TABLE laptops (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description Text,
    price INT,
    rating SMALLINT,
    CHECK (rating >=0 AND rating <=5),
    featured BOOLEAN,
    image TEXT
);
