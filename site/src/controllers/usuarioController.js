var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pao = req.body.paoServer;
    var paoDeQueijo = req.body.paoDeQueijoServer;
    var torrada = req.body.torradaServer;
    var tapioca = req.body.tapiocaServer;
    var ovo = req.body.ovoServer;
    var carolina = req.body.carolinaServer;
    var sonho = req.body.sonhoServer;
    var bolo = req.body.boloServer;
    var idUsuario = req.params.idUsuario;
    var manteiga = req.body.manteigaServer;
    var nutella = req.body.nutellaServer;
    var requeijao = req.body.requeijaoServer;
    var doceDeLeite = req.body.doceDeLeiteServer;
    var geleia = req.body.geleiaServer;
    var queijo = req.body.queijoServer;
    var presunto = req.body.presuntoServer;
    var mortadela = req.body.mortadelaServer;
    var cafe = req.body.cafeServer;
    var refrigerante = req.body.refrigeranteServer;
    var iorgute = req.body.iorguteServer;
    var achocolatado = req.body.achocolatadoServer;
    var agua = req.body.aguaServer;
    var vitamina = req.body.vitaminaServer;
    var cha = req.body.chaServer;
    var suco = req.body.sucoServer;
    // Faça as validações dos valores
    if (pao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (paoDeQueijo == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (torrada == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (tapioca == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (ovo == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (carolina == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sonho == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (bolo == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviar(pao, paoDeQueijo, torrada, tapioca, ovo, carolina, sonho, bolo, idUsuario, manteiga, nutella, requeijao, doceDeLeite, geleia, queijo, presunto, mortadela, cafe, refrigerante, iorgute, achocolatado, agua, vitamina, cha, suco)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! CONTROLLER Erro: ",
                        erro.sqlMessage

                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function calcular_imc(req, res) {
    var altura = req.body.alturaServer;
    var peso = req.body.pesoServer;
    var idUsuario = req.params.idUsuario;
    if (altura == undefined) {
        res.status(400).send("Seu altura está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Sua peso está indefinida!");
    } else {
        usuarioModel.calcular_imc(altura, peso, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! CONTROLLER Erro: ",
                    erro.sqlMessage

                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    enviar,
    calcular_imc

}