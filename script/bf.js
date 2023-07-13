function principal() {
    const pescoço = Number(document.getElementById("pescoco").value);
    const cintura = Number(document.getElementById("cintura").value);
    const altura = Number(document.getElementById("altura").value);
    const quadril = Number(document.getElementById("quadril").value);
    const sexo = Number(document.getElementById("sexo").value);
    const div = document.getElementById("res");

    function calcular() {
        if (sexo == 2) {
            let calculo = 495 / (1.033 - 0.191 * Math.log10(cintura - pescoço) + 0.155 * Math.log10(altura)) - 450;

            div.innerHTML = `Percentual de Gordura Estimado: ${calculo.toFixed(2)}%`;

        } else {
            let calculo = 495 / (1.296 - 0.350 * Math.log10(quadril + cintura - pescoço) + 0.221 * Math.log10(altura)) - 450;

            div.innerHTML = `Percentual de Gordura Estimado: ${calculo.toFixed(2)}%`;
        }
    }

    function mudarCor() {
        if (sexo == 2) {
            let linhasTabela = document.querySelectorAll("#essencial, #atleta, #ginasta, #media, #obeso");
            linhasTabela.forEach(linha => linha.style.backgroundColor = 'initial');

            let calculo = 495 / (1.033 - 0.191 * Math.log10(cintura - pescoço) + 0.155 * Math.log10(altura)) - 450;

            if (pescoço < 0){
                return;
            }

            switch (true) {
                case (pescoço && cintura && altura && calculo <= 5):
                    essencial.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && calculo >= 6 && calculo <= 13):
                    atleta.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && calculo >= 14 && calculo <= 17):
                    ginasta.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && calculo >= 18 && calculo <= 25):
                    media.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && calculo >= 25):
                    obeso.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break
            }
        } else if (sexo == 3) {
            let linhasTabela = document.querySelectorAll("#essencial, #atleta, #ginasta, #media, #obeso");
            linhasTabela.forEach(linha => linha.style.backgroundColor = 'initial');
            let calculo = 495 / (1.296 - 0.350 * Math.log10(quadril + cintura - pescoço) + 0.221 * Math.log10(altura)) - 450;

            if (pescoço < 0){
                return;
            }

            switch (true) {
                case (pescoço && cintura && altura && quadril && calculo <= 13):
                    essencial.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && quadril && calculo >= 14 && calculo <= 20):
                    atleta.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && quadril && calculo >= 21 && calculo <= 24):
                    ginasta.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && quadril && calculo >= 25 && calculo <= 31):
                    media.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break

                case (pescoço && cintura && altura && quadril && calculo >= 31):
                    obeso.style.backgroundColor = "rgba(3, 150, 166, 0.3)";
                    break
            }
        }
    }

    function validar() {
        div.classList.remove('valido');

        if (sexo < 2 || sexo > 3) {
            div.classList.add('invalido')
            div.innerHTML = "Selecione um Sexo!";
            return;
        } else {
            calcular()
        };

        if (sexo && !pescoço) {
            div.classList.add('invalido');
            div.innerHTML = "Medida do pescoço ausente ou inválida!";
        } else if (sexo && !cintura) {
            div.classList.add('invalido');
            div.innerHTML = "Medida da cintura ausente ou inválida!";
        } else if (sexo && !altura) {
            div.classList.add('invalido');
            div.innerHTML = "Altura ausente ou inválida!";
        } else if (sexo == 3 && !quadril) {
            div.classList.add('invalido');
            div.innerHTML = "Medida do quadril ausente ou inválida!";
        } else {
            div.classList.add('valido');
            calcular();
        };

        switch (true) {
            case (pescoço < 0 || cintura < 0 || altura < 0 || quadril < 0 && sexo == 3):
                div.classList.remove('valido');
                div.classList.add('invalido');
                div.innerHTML = "Números negativos são inválidos!";
                break
        };
    };

    calcular();
    validar();
    mudarCor();
};