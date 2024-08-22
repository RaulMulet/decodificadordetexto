const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const copiar = document.getElementById('copiar');
const infoMensagem = document.getElementById('info-mensagem');

criptografar.addEventListener('click', () => {
    const textoCriptografado = criptografarTexto(texto.value);
    resultado.textContent = textoCriptografado;
});

descriptografar.addEventListener('click', () => {
    const textoDescriptografado = descriptografarTexto(texto.value);
    resultado.textContent = textoDescriptografado;
});

copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => {
            infoMensagem.textContent = "Texto copiado!";
            setTimeout(() => {
                infoMensagem.textContent = "Apenas letras minúsculas e sem acento.";
            }, 2000);
        })
        .catch(err => {
            console.error("Falha ao copiar:", err);
        });
});

function criptografarTexto(texto) {
    
    if (texto.match(/[A-ZÀ-Ú]/)) { 
        infoMensagem.textContent = "Por favor, digite apenas letras minúsculas sem acento.";
        return "";
    } else {
        infoMensagem.textContent = "Apenas letras minúsculas e sem acento.";       

    }

    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;

}

function descriptografarTexto(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}