use petitcafe;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (50),
email varchar (50),
senha varchar (50)
);
	
create table comida (
idReceita int primary key auto_increment,
pão int,
broa int,
pãoDeQueijo int,
carolina int,
ovo int,
bolo int,
tapioca int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
);

create table bebida (
idBebida int primary key auto_increment,
cafe int,
refrigerante int,
iorgute int,
achocolatado int,
leite int,
agua int,
vitamina int,
fkUsuario_bebida int,
constraint fkUsuario foreign key (fkUsuario_bebida) references usuario (idUsuario)
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
mortadela int,
fkUsuario_acom int,
constraint fkUsuario_acom foreign key (fkUsuario_acom) references usuario (idUsuario)
);

create table avaliação (
idAvaliacao int primary key auto_increment,
comentario varchar (355),
dtpost datetime,
fkUsuario_avaliacao int,
constraint fkUsuario_avaliacao foreign key (fkUsuario_avaliacao) references usuario (idUsuario)
);