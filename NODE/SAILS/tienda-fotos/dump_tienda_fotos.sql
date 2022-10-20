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
    precio DECIMAL NOT NULL,
    activa BOOLEAN NOT NULL,
    primary key(id)
);

INSERT INTO foto(titulo, descripcion, ruta, precio,activa) VALUES('Chica desconocida','¿pero quien es ella?','img1.jpg',3500,true);
INSERT INTO foto(titulo, descripcion, ruta, precio,activa) VALUES('Collage','Mira todo eso','img2.jpg',1500,true);

CREATE TABLE orden_de_compra(
    id SERIAL NOT NULL,
    titulo VARCHAR NOT NULL,
    descripcion VARCHAR NOT NULL,
    ruta VARCHAR NOT NULL,
    activa BOOLEAN NOT NULL,
    primary key(id)
);