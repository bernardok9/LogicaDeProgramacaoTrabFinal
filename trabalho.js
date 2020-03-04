//Contador de alunos + struct aluno;
function Aluno(_nome, _idade, _curso, _grupo) {
    this.nome = _nome;
    this.idade = _idade;
    this.curso = _curso;
    this.grupo = _grupo;
}

//Vetor de objetos aluno;
aluno = [];

//Função Adicionar Aluno.
function adicionar() {
    var inNome = document.getElementById("inNome").value;
    var inIdade = Number(document.getElementById("inIdade").value);
    var inCurso = document.getElementById("inCurso").value;

    if (inNome != "" && inIdade != "" && inCurso != "") {
        aluno[aluno.length] = new Aluno(inNome, inIdade, inCurso);
    } else {
        alert("Não foi possível adicionar o usuário.");
    }
} document.getElementById("btAdd").addEventListener("click", adicionar); //TA FUNCIONANDO OK

//Função Listar Alunos;
function listar() {
    var lista = "Nome/Idade/Curso\n";
    aluno.sort(sortzada);
    if (aluno.length != 0) {
        lista += aluno[0].nome + " (" + aluno[0].idade + ") " + aluno[0].curso;
        for (var i = 1; i < aluno.length; i++) {
            lista += "\n" + aluno[i].nome + " (" + aluno[i].idade + ") " + aluno[i].curso;
        }
        document.getElementById("outLista").textContent = lista;
    } else {
        alert("Nenhum aluno cadastrado");
    }


} document.getElementById("btListar").addEventListener("click", listar); // TA FUNCIONANDO OK

function estatistica() {
    var stackCursos = { ads: 0, redes: 0, marketing: 0 };

    for (var i = 0; i < aluno.length; i++) {
        if (aluno[i].curso == "ADS") {
            stackCursos.ads++;
        }

        if (aluno[i].curso == "Redes") {
            stackCursos.redes++;
        }

        if (aluno[i].curso == "Marketing") {
            stackCursos.marketing++;
        }
    }
    if (aluno.length != "0") {
        document.getElementById("outEstatistica").textContent = "Estatística Geral.\nADS: " + stackCursos.ads + "\nRedes: " + stackCursos.redes + "\nMarketing: " + stackCursos.marketing + "\n\n" +
            "Porcentagens.\n" + "ADS: " + (stackCursos.ads / aluno.length * 100).toFixed(2) + "\nRedes: " + (stackCursos.redes / aluno.length * 100).toFixed(2) +
            "\nMarketing: " + (stackCursos.marketing / aluno.length * 100).toFixed(2);
    }
} document.getElementById("btEstatistica").addEventListener("click", estatistica); // TA FUNCIONANDO OK


function fIdade() {
    if (aluno[0].idade != "") {
        var media = mediaAmplitude();
        defAmplitude(media);
    }
    document.getElementById("outIdade1").textContent = listarGrupo1(media);
    if (aluno.length >= 2) {
        document.getElementById("outIdade2").textContent = listarGrupo2(media);
    }

} document.getElementById("btIdade").addEventListener("click", fIdade);



//Funções aleatórias: ########################################################################################################################################################### 

//Primeiro parâmetro de retorno é o nome e o segundo é a idade. Caso os nomes sejam iguais.
function sortzada(a, b) {
    if (a.nome < b.nome) {
        return -1;
    }
    if (a.nome > b.nome) {
        return 1;
    }
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade) {
        return 1;
    }
    if (a.curso < b.curso) {
        return -1;
    }
    if (a.curso > b.curso) {
        return 1;
    }
}

function listarGrupo1(media) {
    var grupo1 = "";

    for (var i = 0; i < aluno.length; i++) {
        if (aluno[i].grupo == 1) {
            if (grupo1 == "") {
                grupo1 += "\n" + aluno[i].nome + "(" + aluno[i].idade + ")";
            } else {
                grupo1 += "\n" + aluno[i].nome + "(" + aluno[i].idade + ")";
            }
        }
    }



    return "Amplitude " + calcNovo() + "-" + Math.floor(media) + ": " + grupo1;
}

function listarGrupo2(media) {
    var grupo2 = "";

    for (var i = 0; i < aluno.length; i++) {
        if (aluno[i].grupo == 2) {
            if (grupo2 == "") {
                grupo2 += "\n" + aluno[i].nome + "(" + aluno[i].idade + ")";
            } else {
                grupo2 += "\n" + aluno[i].nome + "(" + aluno[i].idade + ")";
            }
        }
    }



    return "Amplitude " + (Math.floor(media) + 1) + "-" + calcVelho() + ": " + grupo2;
}


function calcVelho() {
    var velho = aluno[0].idade;
    for (var i = 1; i < aluno.length; i++) {
        if (velho < aluno[i].idade) {
            velho = aluno[i].idade;
        }
    }
    return velho;
}

function calcNovo() {
    var novo = aluno[0].idade;
    for (var i = 1; i < aluno.length; i++) {
        if (novo > aluno[i].idade) {
            novo = aluno[i].idade;
        }
    }
    return novo;
}

function defAmplitude(amplitude) {
    for (var i = 0; i < aluno.length; i++) {
        if (aluno[i].idade <= amplitude) {
            aluno[i].grupo = 1;
        } else {
            aluno[i].grupo = 2;
        }
    }
}

function mediaAmplitude() {
    var valor = 0
    for (var i = 0; i < aluno.length; i++) {
        valor = valor + aluno[i].idade;
    }
    valor = valor / aluno.length;

    return valor;
}




//Esse de organizar achei na internet. É tenso ordenar string em objetos, javascript não tem parâmetro padrão.
//https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/?fbclid=IwAR2mmFlgO0ocEdSdVss5XQ7PsvOxwaUUb1s9mr5EZUrR2GK5-SNQrP-GGZo