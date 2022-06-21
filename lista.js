let listaAlunos = ["Ana Paula", "Clara", "Gabriela", "José", "Lucas"]

for(let numero = 0; numero < listaAlunos.length; numero++){
    console.log(numero)
    if(numero == 0) {
        console.log( "O número é zero")
    } else if (numero % 2 == 0 ) {
        console.log(`O numero ${numero} é par`)
    } else if (numero % 2 == 1 ) {
        console.log(`O numero ${numero} é impar`)
    }
    
}