function principal() {

    const sexo = Number(document.getElementById('sexo').value);
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const idade = Number(document.getElementById('idade').value);
    const atividade = document.getElementById('atividade').value;
    const resultado = document.getElementById('res');

    function calculaTMB() {
        let calculoHomem = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
        let calculoMulher = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

        switch (true) {
            case (sexo == 1 && atividade == 1):
                resultado.innerHTML = "Valor estimado: " + (calculoHomem * 1.2).toFixed(2) + " Kcal";
                break

            case (sexo == 2 && atividade == 1):
                resultado.innerHTML = "Valor estimado: " + (calculoMulher * 1.2).toFixed(2) + " Kcal";
                break

            case (sexo == 1 && atividade == 2):
                resultado.innerHTML = "Valor estimado: " + (calculoHomem * 1.375).toFixed(2) + " Kcal";
                break

            case (sexo == 2 && atividade == 2):
                resultado.innerHTML = "Valor estimado: " + (calculoMulher * 1.375).toFixed(2) + " Kcal";
                break

            case (sexo == 1 && atividade == 3):
                resultado.innerHTML = "Valor estimado: " + (calculoHomem * 1.55).toFixed(2) + " Kcal";
                break

            case (sexo == 2 && atividade == 3):
                resultado.innerHTML = "Valor estimado: " + (calculoMulher * 1.55).toFixed(2) + " Kcal";
                break

            case (sexo == 1 && atividade == 4):
                resultado.innerHTML = "Valor estimado: " + (calculoHomem * 1.725).toFixed(2) + " Kcal";
                break

            case (sexo == 2 && atividade == 4):
                resultado.innerHTML = "Valor estimado: " + (calculoMulher * 1.725).toFixed(2) + " Kcal";
                break

            case (sexo == 1 && atividade == 5):
                resultado.innerHTML = "Valor estimado: " + (calculoHomem * 1.9).toFixed(2) + " Kcal";
                break

            case (sexo == 2 && atividade == 5):
                resultado.innerHTML = "Valor estimado: " + (calculoMulher * 1.9).toFixed(2) + " Kcal";
                break
        }
    }

    function validar() {
        resultado.classList.remove('valido');

        if (sexo < 1 || sexo > 2) {
            resultado.classList.add('invalido');
            resultado.innerHTML = "Selecione um Sexo!";
            return;
        }

        if (atividade < 1 || atividade > 5) {
            resultado.classList.add('invalido');
            resultado.innerHTML = "Selecione um nível de atividade!";
            return;
        }

        if (sexo && (!peso || peso < 0)) {
            resultado.classList.add('invalido');
            resultado.innerHTML = "Peso Inválido!";
            return;
        } else if (sexo && (!altura || altura < 0)) {
            resultado.classList.add('invalido');
            resultado.innerHTML = "Altura Inválida!";
            return;
        } else if (sexo && (!idade || idade < 0)) {
            resultado.classList.add('invalido');
            resultado.innerHTML = "Idade Inválida!";
            return;
        }

        resultado.classList.add('valido');
    }
    calculaTMB();
    validar();
}