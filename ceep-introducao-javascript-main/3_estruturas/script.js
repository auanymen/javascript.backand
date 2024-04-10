// Exemplos de Estruturas em JavaScript

// Esrutura Condicional(IF - ELSE) 
let idade = 25

if(idade >=18 ) {
     console.log("Voce é maior de idade ");
} else {
console.log("Voce é menor de idade");
}

// IF - ELSE encadeado 

if(idade < 16) {
    console.log("Voce nao pode votar");
} else if(idade >=16 && idade < 18) {
    console.log("voto opcional");
} else if(idade >=18 && idade <70) {
    console.log("voto obrigatorio");
} else {
    console.log("Voto opcional");
}

//estrutura de escolha (SWITCH - CASE )
console.log("----------------------------");
switch (idade)
{
    case idade < 18:
        console.log("Voce é menor de idade ");
        break;

        default:
        console.log("Voce é maior de idade ");
        break;
}
