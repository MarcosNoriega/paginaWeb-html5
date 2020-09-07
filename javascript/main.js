const lblIntentos = document.getElementById("intentos");
const lblPista = document.getElementById("pista");
const txtAdivinanza = document.getElementById("adivinanza");
const btnReintentar = document.getElementById("reintentar");
const btnSalir = document.getElementById("salir");
const btnComprobar = document.getElementById("comprobar");
var intentosPermitidos = 4;
var intento = 1;
var pistas = ["Pista 1: Este elemento dibuja un rectángulo alrededor de los elementos integrados en ella.", "Pista 2: puede contener una etiqueta legend para indicar un titulo"]

inicio();

function comprobar() {
    let adivinanza = txtAdivinanza.value;

    if (intento < intentosPermitidos) {
        if (adivinanza.toLowerCase() == "fieldset") {
            lblPista.innerHTML = "Felicidades!!! has adivinado";
            lblPista.hidden = false;
            btnSalir.hidden = false;
            btnComprobar.hidden = true;

        } else if (intento == 1 || intento == 2){
            lblPista.innerHTML += `<p>${pistas[intento - 1]}</p>`;
            lblPista.hidden = false;
            
        }

        intento++;
        lblIntentos.innerHTML = `Intento ${intento} de ${intentosPermitidos}`;

    } else {
        lblPista.innerHTML = "Lo siento se te acabaron los intentos";
        reintentar.hidden = false;
        btnComprobar.hidden = true;
    }
}

function inicio() {
    lblPista.hidden = true;
    intento = 1;
    lblIntentos.innerHTML = `Intento ${intento} de ${intentosPermitidos}`;
    btnSalir.hidden = true;
    btnComprobar.hidden = false;
    reintentar.hidden = true;
    txtAdivinanza.value = "";  
}