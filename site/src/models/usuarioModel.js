var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM imc RIGHT JOIN usuario ON idUsuario = fkusuario  WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function enviar(pao, paoDeQueijo, torrada, tapioca, ovo, carolina, sonho, bolo, idUsuario, manteiga, nutella, requeijao, doceDeLeite, geleia, queijo, presunto, mortadela, cafe, refrigerante, iorgute, achocolatado, agua, vitamina, cha, suco) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", pao, paoDeQueijo, torrada, tapioca, ovo, carolina, sonho, bolo, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO cafeDaManha (fkUsuario, fkAlimento, qtd) VALUES ('${idUsuario}', '1', '${pao}'), 
        ('${idUsuario}', '2', '${paoDeQueijo}'), 
        ('${idUsuario}', '3', '${torrada}'), 
        ('${idUsuario}', '4', '${tapioca}'), 
        ('${idUsuario}', '5', '${ovo}'),
        ('${idUsuario}', '6', '${carolina}'),
        ('${idUsuario}', '7', '${sonho}'),
        ('${idUsuario}', '8', '${bolo}'), 
        ('${idUsuario}', '9', '${manteiga}'),
        ('${idUsuario}', '10', '${nutella}'),
        ('${idUsuario}', '11', '${requeijao}'),
        ('${idUsuario}', '12', '${doceDeLeite}'),
        ('${idUsuario}', '13', '${geleia}'),
        ('${idUsuario}', '14', '${queijo}'),
        ('${idUsuario}', '15', '${presunto}'),
        ('${idUsuario}', '16', '${mortadela}'),
        ('${idUsuario}', '17', '${cafe}'),
        ('${idUsuario}', '18', '${refrigerante}'),
        ('${idUsuario}', '19', '${iorgute}'),
        ('${idUsuario}', '20', '${achocolatado}'),
        ('${idUsuario}', '21', '${agua}'),
        ('${idUsuario}', '22', '${vitamina}'),
        ('${idUsuario}', '23', '${cha}'),
        ('${idUsuario}', '24', '${suco}');       
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function calcular_imc(altura, peso, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", altura, peso, idUsuario)
    var instrucao = `
    INSERT INTO imc (altura, peso, fkusuario) VALUES (${altura}, ${peso}, ${idUsuario});
`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    enviar,
    calcular_imc
};