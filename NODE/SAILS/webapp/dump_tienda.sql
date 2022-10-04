CREATE DATABASE celubarato;

CREATE TABLE articulo(
    id SERIAL, 
    descripcion VARCHAR NOT NULL, 
    precio INTEGER NOT NULL, 
    modelo VARCHAR NOT NULL, 
    marca VARCHAR NOT NULL
);

CREATE TABLE cerrajeros(
    id SERIAL,
    nombre VARCHAR NOT NULL,
    telefono VARCHAR NOT NULL,
    zona VARCHAR NOT NULL,
    disponible BOOLEAN NOT NULL,
    primary key(id)
);

CREATE TABLE comentarios(
    id SERIAL,
    comentario VARCHAR NOT NULL,
    id_cerrajero INT NOT NULL,
    id_usuario INT NOT NULL,
    primary key(id)
);

CREATE TABLE usuario(
    id SERIAL,
    nombre VARCHAR NOT NULL,
    telefono VARCHAR NOT NULL,
    primary key(id)
);

CREATE TABLE empresas(
	id SERIAL,
	nombre VARCHAR NOT NULL,
	primary key(id)
);

CREATE TABLE bitacora(
	id SERIAL,
	tabla VARCHAR NOT NULL,
	operacion VARCHAR NOT NULL,
	fecha DATE NOT NULL,
	primary key(id)
);

ALTER TABLE comentarios
ADD constraint fk_comentarios_has_cerrajeros
FOREIGN KEY (id_cerrajero)
REFERENCES cerrajeros (id);

ALTER TABLE comentarios
ADD constraint fk_comentarios_has_usuario
FOREIGN KEY (id_usuario)
REFERENCES usuario (id);

ALTER TABLE cerrajeros
ADD constraint fk_cerrajeros_has_empresas
FOREIGN KEY (id_empresa)
REFERENCES empresas (id);

INSERT INTO articulo(
    descripcion, precio, modelo, marca
) 
VALUES(
    'Celular Xiaomi Redmi 13 Pro 3G RAM', 
    1300000, 
    'Redmi 13 Pro', 
    'Xiaomi'
);

INSERT INTO articulo(
    descripcion, precio, modelo, marca
) 
VALUES(
    'Celular XIAOMI Redmi 10 2022 128GB Azul', 
    900000, 
    'Redmi 10', 
    'Xiaomi'
);

INSERT INTO cerrajeros(
    nombre, telefono, zona, disponible
)VALUES(
    'Anthoni Switcher',
    '311543242',
    'Bogotá Colombia',
    true
);

INSERT INTO usuario(
    nombre, telefono
)VALUES(
    'Sebastian Pabon Lopez',
    '3223142488'
);

INSERT INTO empresas(nombre) VALUES(
    'Cerrajeros S.A.S'
)