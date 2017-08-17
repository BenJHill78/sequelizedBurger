CREATE DATABASE burgerss_db;

USE burgerss_db;

CREATE TABLE burgerss(
    id INTEGER(20) auto_increment not null,
    burger_name varchar (50) not null,
    devoured boolean not null default false,
    date timestamp not null default current_timestamp,
    
    primary key(id)

)