// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}
function abrir_menu() {
    document.getElementById("menu_oculto").style.width = "13vw";
}
function menu_fechar() {
    document.getElementById("menu_oculto").style.width = "0vw";
}

function mostrar_popup_login() {
    popup_sim_cadastro.classList.add("disable-cadastro");
    popup_sim_login.classList.remove("disable");
    document.getElementById("menu_oculto").style.width = "0vw";
}
function mostrar_popup_cadastro() {
    popup_sim_login.classList.add("disable");
    popup_sim_cadastro.classList.remove("disable-cadastro");
    document.getElementById("menu_oculto").style.width = "0vw";
}
