
function encriptarTexto (){
    let textoCifrar = document.getElementById('textoAEncripar').value;
    
    if ((/[A-Z]/.test(textoCifrar)) || (/[!@#$%^&*(),.?":{}|<>]/.test(textoCifrar)) || (/[áéíóúÁÉÍÓÚñÑüÜ]/.test(textoCifrar)))
    {
        alert("tu texto tiene caracteres prohibidos");
    }
    else
    {
        let textoEncriptado = textoCifrar
        .replace(/e/g, "enter")
        .replace(/o/g, "ober")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");


        //alert(textoEncriptado);
        document.getElementById('inicio__decifrar').style.display = "none";
        document.getElementById('salida__decifrar').style.display = "block";
        document.getElementById("resultados").innerText = textoEncriptado;
                      
    }
}
function desencriptarTexto(){
    let textoDesencriptado = document.getElementById('textoAEncripar').value;
    
    let textoDecifrado = textoDesencriptado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    //alert(textoDecifrado);
    document.getElementById('inicio__decifrar').style.display = "none";
    document.getElementById('salida__decifrar').style.display = "block";
    document.getElementById("resultados").innerText = textoDecifrado;

}


function copiarTexto() {
    // Obtén el elemento del párrafo
    let parrafo = document.getElementById("resultados");
    // Crea un objeto Range para seleccionar el texto
    let range = document.createRange();
    range.selectNodeContents(parrafo);

    // Selecciona el texto usando el objeto Range
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();  // Elimina cualquier selección existente
    seleccion.addRange(range);    // Añade la nueva selección

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

}