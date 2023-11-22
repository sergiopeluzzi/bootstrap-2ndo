// variáveis com var
var nome;
var idade;

nome = "Sergio";
idade = 37;
// alert(idade);
idade = idade + 1;
// alert(idade);

// variaveis com let e const
let nome2 = "Jonas"; // não é array nem objeto nem valor imutável LET
const idade2 = 20; // arrays e objetos CONST

let corDoHeader = "#fafafa";
corDoHeader = "#bebebe";

// ===========================================================================

// Operdadores
// Operadores de Atribuição
// = -> Operador de Atribuição
var nome3 = "Carol";
var idade3 = 25;
idade3 = idade3 + 1;
idade3 += 1;
idade3 = idade3 - 2;
idade3 -= 2;
idade3 = idade3 * 2;
idade3 *= 2;

// Operadores Aritmeticos -> Resultado é aritmético | Number
// + -> adição e concatenação
var soma = 2 + 3 + 89;
var concatenado = "String 01" + "String 02";
// alert(soma);
// alert(concatenado);

// - -> subtração
var subt = 20 - 6;
// alert(subt);

// * -> multiplicação
var mult = 5 * 49;
// alert(mult);

// / -> divisão
var divi = 800 / 12;
// alert(divi);

// % -> modulo
var modu = 40 % 2;
// alert(modu);

// ^, ** -> potenciação

// Operadores Relacionais -> Resultado é lógico | Boolean
// > -> maior que
var rel1 = 3 > 2;
// alert(rel1);

// < -> menor que
var rel2 = 3 < 2;
// alert(rel2);

// >= -> maior ou igual a
var rel3 = 3 >= 3;
// alert(rel3);

// <= -> menor ou igual a
var rel4 = 4 <= 3;
// alert(rel4);

// == -> igual a
var rel5 = 5 == 5;
// alert(rel5);

// != -> não igual a
var rel6 = 5 != 5;
// alert(rel6);

// Operadores Lógicos
// && -> E -> Só tenho resultado True se os dois lados (branches) forem True
var logi1 = 2 > 1 && 4 > 2;
//T && T == T
// alert(logi1);
var log2 = 2 < 1 && 4 > 2;
//F && T == F;
//alert(log2);
var log3 = 2 > 1 && 4 < 2;
//T && F == F;
//alert(log3);
var log4 = 2 < 1 && 4 < 2;
//F && F == F;
//alert(log4);

// || -> OU -> Só tenho resultado False se os dois lados (branches) forem False
var log5 = 2 > 1 || 4 > 2;
//T || T == T
// alert(log5);
var log6 = 2 < 1 || 4 > 2;
//F || T == T;
//alert(log6);
var log7 = 2 > 1 || 4 < 2;
//T || F == T;
//alert(log7);
var log8 = 2 < 1 || 4 < 2;
//F || F == F;
//alert(log8);

// !  -> NÃO
var log9 = 10 * 2 >= 5 * 4 && 1 > 2;
// alert(log9);
// alert(!log9);

// ===========================================================================
// estrutura condicional

// var usuario = prompt("Informe o seu nome:");
// var idade = prompt("Informe a sua idade:");

// if (idade >= 18) {
//     //executado quqndo a condição for true
//     alert(usuario + " sua entrada foi liberada! Aproveite!");
// } else {
//     //executado quando a condição for false
//     alert(usuario + ", desculpe, requisitos incompatíveis!");
// }

// if (idade >= 0 && idade < 12) {
//     alert("Criança");
// } else if (idade >= 12 && idade < 18) {
//     alert("Jovem");
// } else if (idade >= 18 && idade < 60) {
//     alert("Adulto");
// } else if (idade >= 60 && idade < 130) {
//     alert("Idoso");
// } else {
//     alert("Valor Inválido para idade");
// }

// Estruturas de repetição (loops)
// var ativado = true;

// while (ativado) {
//     var user = prompt("Digite seu nome");

//     if (user == "parar") {
//         ativado = false;
//     }
// }

// var total = 10;
// var qnt = 1;

// alert("While");
// while (qnt <= total) {
//     alert(qnt);
//     qnt = qnt + 1;
// }

// // alert("Do");

// do {
//     alert(qnt);
//     qnt++;
// } while (qnt <= total);

// for (var c = 1; c <= 10; c++) {
//     alert(c);
// }

// Funções

function calculadora(num1, num2, operacao) {
    if (operacao == "soma") {
        alert(num1 + num2);
    } else if (operacao == "subt") {
        alert(num1 - num2);
    } else if (operacao == "mult") {
        alert(num1 * num2);
    } else if (operacao == "divi") {
        alert(num1 / num2);
    } else {
        alert("As operações aceitas são: soma, subt, mult ou divi");
    }
}

var a = prompt("Informe o primeiro numero:");
var b = prompt("Informe o segundo numero:");
var opt = prompt("Informe a operação: soma, subt, mult ou divi");

calculadora(+a, +b, opt);
