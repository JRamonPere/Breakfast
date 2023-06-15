create database petitcafe; 

use petitcafe;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45)
);
	
create table comida (
idComida int primary key auto_increment,
pão int,
broa int,
pãoDeQueijo int,
carolina int,
ovo int,
bolo int,
tapioca int
);

create table bebida (
idBebida int primary key auto_increment,
cafe int,
refrigerante int,
iorgute int,
achocolatado int,
leite int,
agua int,
vitamina int
);

create table acompanhamento (
idAcompanhamento int primary key auto_increment,
manteiga int,
nutella int,
requeijão int,
doceDeLeite int,
goiabada int,
geleia int,
queijo int,
presunto int,
mortadela int
);
create table cafeDaManha (
idcafeDaManha int auto_increment,
fkUsuario int,
fkComida int,
fkAcompanhamento int,
fkBebida int, 
constraint fkusuario foreign key (fkUsuario) references usuario (idUsuario),
constraint fkcomida foreign key (fkComida) references comida (idComida),
constraint fkacompanhamento foreign key (fkAcompanhamento) references acompanhamento (idAcompanhamento),
constraint fkbebida foreign key (fkBebida) references bebida (idBebida),
constraint pkcafedamnha primary key (idcafeDaManha, fkUsuario, fkComida)
);

