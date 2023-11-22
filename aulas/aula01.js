// entrada e saída padrão do navegador
// alert("O arquivo javascript funcionaou!"); //saida padrão
// prompt("Qual é o seu nome?"); //entrada padrão
// console.log("O arquivo javascript funcionaou!"); //saida padrão

// variáveis
//var nome = prompt("Qual é o seu nome?");
//var idade = prompt("Qual é a sua idade?");

//console.log("Olá " + nome + ", tudo bem? Você tem " + idade + " anos.");

// tipos de dados

// string
var nome = "Eduardo";
console.log(typeof nome);

var idade = 30;
console.log(typeof idade);

var possuiFaculdade = true;
console.log(typeof possuiFaculdade);

var peso = 80.7;
console.log(typeof peso);

var ativo = "S";
console.log(typeof ativo);

var nomes = ["Eduardo", "Maria", "João"];
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

var carro1 = {
    nome: "Ferrari",
    cor: "Vermelho",
    preco: 1000000,
    motor: 3.0,
    novo: true,
    acessorios: ["Câmbio automático", "2 portas", "Direção elétrica"],
};

var carro2 = {
    nome: "Fusca",
    cor: "Azul",
    preco: 10000,
    motor: 1.0,
    novo: false,
    acessorios: ["Câmbio manual", "2 portas", "Direção mecânica"],
};

var carro3 = {
    nome: "Palio",
    cor: "Branco",
    preco: 20000,
    motor: 1.6,
    novo: false,
    acessorios: ["Câmbio manual", "4 portas", "Direção hidráulica"],
};

var carros = [carro1, carro2, carro3];
