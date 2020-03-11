// Base a ser utilizada
const alunosDaEscola = [{ nome: 'Henrique', notas: [], cursos: [], faltas: 5 }, { nome: 'Edson', notas: [], cursos: [], faltas: 2 }, { nome: 'Bruno', notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, { nome: 'Guilherme', notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: 'Full Stack', dataMatricula: new Date }], faltas: 0 }, { nome: 'Carlos', notas: [], cursos: [], faltas: 0 }, { nome: 'Lucca', notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: 'UX', dataMatricula: new Date }], faltas: 0 }];

// implementação
const adicionarAluno = (nomeAluno) => {
    //Declaração de objeto auxiliar para inserção no array
    let novoAluno = {
        nome: nomeAluno,
        notas: [],
        cursos: [],
        faltas: 0
    }
    // Se o tamanho do array original for menor do que o tamanho do mesmo array depois de inserir um novo aluno, significa que a inserção deu certo
    if (alunosDaEscola.length < alunosDaEscola.push(novoAluno)) {
        console.log('Aluno inserido com sucesso!')
    }
    else {
        console.log('Erro ao inserir aluno!')
    }
}

const listarAlunos = () => {
    alunosDaEscola.forEach((aluno) => {
        console.log('')
        console.log(`Nome: ${aluno.nome}`)
        // Se a primeira posição do array cursos for diferente de null ou diferente de undefined significa que o aluno em questão está cadastrado em um curso
        if (aluno.cursos[0] != null || aluno.cursos[0] != undefined) {
            for (let curso of aluno.cursos) {
                console.log(`Curso: ${curso.nomeDoCurso}`)
                console.log(`Data de Matrícula: ${curso.dataMatricula}`)
            }
        }
        // Se o aluno não estiver cadastrado em nenhum curso exibe apenas os campos vazios
        else {
            console.log(`Curso: `)
            console.log(`Data de Matricula:`)
        }
        console.log(`Faltas: ${aluno.faltas}`)
        console.log(`Notas: ${aluno.notas}`)
    })
}

const buscarAluno = (nome) => {
    let retorno = {}
    let encontrou = false
    //Percorre todas as posições do array checando se o campo nome de cada uma é igual ao nome recebido pelo parametro
    alunosDaEscola.forEach(aluno => {
        // Caso encontre, muda o valor da variavel retorno com um objeto contendo todas as informações do aluno e muda a variavel encontrou para true
        if (aluno.nome === nome) {
            retorno = aluno
            encontrou = true
        }
    })

    // Exibe o resultado para o usuario
    if (encontrou) {
        console.log(`Aluno(a) ${nome} foi encontrado(a) com sucesso`)
    }
    else {
        console.log(`Aluno(a) não foi encontrado(a)`)
    }
    // Retorna um objeto vazio se o aluno não foi encontrado ou um objeto com todas as informações do aluno encontrado
    return retorno
}

const matricularAluno = (aluno, curso) => {
    // Verifica se o objeto recebido é válido
    let alunoAux = buscarAluno(aluno.nome)
    // Verifica se o objeto recebido no passo anterior está vazio
    if (Object.entries(alunoAux).length === 0 && alunoAux.constructor === Object) {
        console.log('Aluno(a) não cadastrado no sistema!')
    }
    //Se o objeto recebido estiver devidamente cadastrado prossegue com a matricula
    else {
        // Criação do objeto auxiliar para inserção 
        let cursoAux = {
            nomeDoCurso: curso,
            dataMatricula: new Date()
        }
        // Percorre o array para determinar a posição do aluno que será matriculado no curso desejado
        for (let i = 0; i < alunosDaEscola.length; i++) {
            if (alunosDaEscola[i].nome === aluno.nome) {
                alunosDaEscola[i].cursos.push(cursoAux)
                console.log('Aluno Matriculado com sucesso!')
                break
            }
        }
    }
}

const aplicarFalta = (aluno) => {
    // Verifica se o objeto recebido é válido
    alunoAux = buscarAluno(aluno.nome)
    // Verifica se o objeto recebido no passo anterior está vazio
    if (alunoAux.constructor === Object && Object.entries(alunoAux).length === 0) {
        console.log('Aluno(a) não cadastrado no sistema!')
    }
    else {
        //Verifica se o aluno está matriculado em um curso
        if (aluno.cursos.length === 0) {
            console.log('Aluno não está cadastrado em nenhum curso!')
        }
        //Se o objeto recebido estiver devidamente cadastrado no array e em um curso, prossegue com a aplicação de falta
        else {
            for (let i = 0; i < alunosDaEscola.length; i++) {
                if (alunosDaEscola[i].nome === aluno.nome) {
                    alunosDaEscola[i].faltas++
                }
            }
            console.log('Falta aplicada com sucesso')
        }
    }
}

const aplicarNota = (aluno, nota) => {
    // Verifica se o objeto recebido é válido
    let alunoAux = buscarAluno(aluno.nome)
    // Verifica se o objeto recebido no passo anterior está vazio
    if (alunoAux.constructor === Object && Object.entries(alunoAux).length === 0) {
        console.log('Aluno(a) não cadastrado no sistema!')
    }
    else {
        //Verifica se o aluno está matriculado em um curso
        if (aluno.cursos.length === 0) {
            console.log('Aluno não está cadastrado em nenhum curso!')
        }
        //Se o objeto recebido estiver devidamente cadastrado no array e em um curso, prossegue com a aplicação de nota
        else {
            for (let i = 0; i < alunosDaEscola.length; i++) {
                if (alunosDaEscola[i].nome === aluno.nome) {
                    alunosDaEscola[i].notas.push(nota)
                }
            }
            console.log('Nota aplicada com sucesso')
        }
    }
}

const aprovarAluno = (aluno) => {
    // Verifica se o objeto recebido é válido
    let alunoAux = buscarAluno(aluno.nome)
    let notaMedia

    // Verifica se o objeto recebido no passo anterior está vazio
    if (alunoAux.constructor === Object && Object.entries(alunoAux).length === 0) {
        console.log('Aluno(a) não cadastrado no sistema!')
    }
    else {
        //Verifica se o aluno está matriculado em um curso
        if (aluno.cursos.length === 0) {
            console.log('Aluno não está cadastrado em nenhum curso!')
        }
        //Se o objeto recebido estiver devidamente cadastrado no array e em um curso, prossegue com a aprovação
        else {
            //Encontra a posição do aluno em questão no array
            for (let i = 0; i < alunosDaEscola.length; i++) {
                if (alunosDaEscola[i].nome === aluno.nome) {
                    // Soma todas as notas do aluno
                    notaMedia = alunosDaEscola[i].notas.reduce((acumulador, posicaoAtual) => {
                        return acumulador + posicaoAtual
                    })
                    // Divide o resultado da soma das notas pela quantidade de notas
                    notaMedia = notaMedia / alunosDaEscola[i].notas.length
                    //Verifica as condições de aprovação e exibe o resultado para o usuário
                    if (notaMedia > 7 && alunosDaEscola[i].faltas <= 3) {
                        console.log('Aluno aprovado')
                    }
                    else {
                        console.log('Aluno reprovado')
                    }
                }
            }
        }
    }
}