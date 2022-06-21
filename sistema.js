// Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

// Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

// Listar participantes e palestrantes por evento.
 
// Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


let idadeMinima = 18;
let idadeCliente = 21;

             //condição                    //true                //false
console.log(idadeCliente >= idadeMinima ? "Permitir Cadastro!" : "Cadastro não permitido!")


    function imprimeTexto(texto){
        console.log(texto)

}

let dataAtual = new Date("2022-06-21"); // Salvando a data de hoje
let dataEvento = new Date ("2022-08-25")  // Salvando a data do evento como uma string

            //condição                 //true                //false
console.log(dataEvento >= dataAtual ? "Permitir Cadastro!" : "Cadastro não permitido!")

    function imprimeTexto(texto){
        console.log(texto)
    }


let quantidadeParticipantes = 100;
let numeroInscricaoParticipante = 150;

            //condição                                                //true                //false
console.log(quantidadeParticipantes >= numeroInscricaoParticipante ? "Permitir Cadastro!" : "Cadastro não permitido!")

    function imprimeTexto(texto){
        console.log(texto)
    }