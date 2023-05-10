function abrir_menu() {
    document.getElementById("menu_oculto").style.width="13vw";
}
function menu_fechar() {
    document.getElementById("menu_oculto").style.width="0vw";
}

function mostrar_popup_login() {
    popup_sim_cadastro.classList.add("disable-cadastro");
    popup_sim_login.classList.remove("disable");
}
function mostrar_popup_cadastro() {
    popup_sim_login.classList.add("disable");
    popup_sim_cadastro.classList.remove("disable-cadastro");
}

