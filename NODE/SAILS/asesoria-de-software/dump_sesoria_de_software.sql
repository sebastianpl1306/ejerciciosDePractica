CREATE DATABASE asesoria_software;

CREATE TABLE solicitud(
    id SERIAL,
    nombre VARCHAR NOT NULL,
    apellido VARCHAR NOT NULL,
    servicio VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    telefono BIGINT NOT NULL,
    primary key(id)
);

CREATE TABLE navegador(
	id SERIAL NOT NULL,
	fecha_hora DATE NOT NULL,
    nav VARCHAR NOT NULL,
	primary key(id)
);