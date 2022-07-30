const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29

const andre: {nome: string, idade: number, profissao: string} = {
    nome:'andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome:'paula',
    idade: 25,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,   
    materias: ['Matematica discreta', 'programação']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);