--creamos la tabla de usuarios
create table users(
id serial primary key,
name varchar(50) not null,
email varchar(50) not null
);

--agregamos datos de usuarios
insert into users (name, email) values('Juan', 'juan@gmail.com');
insert into users (name, email) values('Maria', 'maria@gmail.com');
insert into users (name, email) values('Pedro', 'pedro@gmail.com');