CREATE DATABASE tienda_virtual;

CREATE TABLE cliente(
    id SERIAL NOT NULL,
    nombre VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    clave VARCHAR NOT NULL,
    primary key(id)
);

CREATE TABLE foto(
    id SERIAL NOT NULL,
    titulo VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    ruta VARCHAR NOT NULL,
    activa BOOLEAN NOT NULL,
    primary key(id)
);

CREATE TABLE orden_de_compra(
    id SERIAL NOT NULL,
    titulo VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    ruta VARCHAR NOT NULL,
    activa BOOLEAN NOT NULL,
    primary key(id)
);