"use strict";
var pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
var andre = {
    nome: 'andre',
    idade: 25,
    profissao: 'pintor'
};
var paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
};
var monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica discreta', 'programação']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(monica.materias);
