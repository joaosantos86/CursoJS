const form = document.querySelector('#formulario');
//pega valores e valida
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = document.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc(imc) {
    const niveis = ["Abaixo do peso", "Peso Normal",  "Sobrepeso",  "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
    //verifica
    if (imc >= 39.9) return niveis[5];
    if (imc >= 34.9) return niveis[4];
    if (imc >= 29.9) return niveis[3];
    if (imc >= 24.9) return niveis[2];
    if (imc >= 18.5) return niveis[1];
    return niveis[0];
}
    //calculo
function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return Number(imc.toFixed(2));
}
//cria paragrafp
function criaP() {
    const p = document.createElement('p');
    return p;
}
//exibir resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
