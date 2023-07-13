function principal() {

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value) / 100;
    const divRes = document.getElementById("res");

    function calcular() {
        let calculo = peso / (altura * altura);
        let resultado = calculo.toFixed(2);

        switch (true) {
            case (resultado <= 18.5):
                divRes.innerHTML = `Seu IMC: ${resultado}`;
                break

            case (resultado >= 18.5 && resultado <= 24.9):
                divRes.innerHTML = `Seu IMC: ${resultado}`;
                break

            case (resultado >= 25 && resultado <= 29.9):
                divRes.innerHTML = `Seu IMC: ${resultado}`;
                break

            case (resultado >= 30 && resultado <= 39.9):
                divRes.innerHTML = `Seu IMC: ${resultado}`;
                break

            case (resultado >= 40):
                divRes.innerHTML = `Seu IMC: ${resultado}`;
        }
    }

    function validar() {
        divRes.classList.remove('valido');

        if (!peso) {
            divRes.classList.add('invalido');
            divRes.innerHTML = "Peso Inválido! Digite Novamente."
            return;
        } else if (!altura) {
            divRes.classList.add('invalido');
            divRes.innerHTML = "Altura Inválida! Digite Novamente."
            return;
        } else {
            divRes.classList.add('valido');
            calcular();
        }
    }

    function mudarCor() {
        let calculo = peso / (altura * altura);
        let resultado = calculo.toFixed(2);
        let linhasTabela = document.querySelectorAll("#magreza, #normal, #sobrepeso, #obesidade, #obesidadeGrave");
        linhasTabela.forEach(linha => linha.style.backgroundColor = "initial");

        if (altura < 0 || peso < 0) {
            divRes.classList.remove('valido');
            divRes.classList.add('invalido');
            divRes.innerHTML = "Números negativos são inválidos!"
            return;
        }

        switch (true) {
            case (peso && altura && resultado <= 18.5):
                magreza.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                break

            case (peso && altura && resultado >= 18.5 && resultado <= 24.9):
                normal.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                break

            case (peso && altura && resultado >= 25 && resultado <= 29.9):
                sobrepeso.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                break

            case (peso && altura && resultado >= 30 && resultado <= 39.9):
                obesidade.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                break

            case (peso && altura && resultado >= 40):
                obesidadeGrave.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                break
        }
    }
    calcular();
    validar();
    mudarCor();
}