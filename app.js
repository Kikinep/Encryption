let texto = document.querySelector("#original");
let encriptado = document.querySelector("#encriptado");

function encriptar() {
    let textoUsuario = texto.value;

    textoUsuario = textoUsuario.replaceAll("e", "enter");
    textoUsuario = textoUsuario.replaceAll("i", "imer");
    textoUsuario = textoUsuario.replaceAll("a", "ai");
    textoUsuario = textoUsuario.replaceAll("o", "ober");
    textoUsuario = textoUsuario.replaceAll("u", "ufat");
    
    texto.value = "";
    encriptado.value = textoUsuario;
}

function desencriptar() {
    let textoUsuario = texto.value;

    textoUsuario = textoUsuario.replaceAll("enter", "e");
    textoUsuario = textoUsuario.replaceAll("imer", "i");
    textoUsuario = textoUsuario.replaceAll("ai", "a");
    textoUsuario = textoUsuario.replaceAll("ober", "o");
    textoUsuario = textoUsuario.replaceAll("ufat", "u");
    
    texto.value = "";
    encriptado.value = textoUsuario;
}

async function copiar() {
    await navigator.clipboard.writeText(encriptado.value);
    encriptado.value = "";
}
