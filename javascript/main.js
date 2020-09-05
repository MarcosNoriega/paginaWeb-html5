const lblIntentos = document.getElementById("intentos");
const lblPista = document.getElementById("pista");
const txtAdivinanza = document.getElementById("adivinanza");
const btnReintentar = document.getElementById("reintentar");
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

        } else if (intento == 1 || intento == 2){
            lblPista.innerHTML += `<p>${pistas[intento - 1]}</p>`;
            lblPista.hidden = false;
            
        }

        intento++;
        lblIntentos.innerHTML = `Intento ${intento} de ${intentosPermitidos}`;

    } else {
        lblPista.innerHTML = "Lo siento se te acabaron los intentos";
        reintentar.hidden = false;
    }
}

function inicio() {
    lblPista.hidden = true;
    lblIntentos.innerHTML = `Intento ${intento} de ${intentosPermitidos}`;
    reintentar.hidden = true;
}