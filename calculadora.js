/*CALCULADORA - NIVEL 1 e 2 */


function adicionar(numero,numero2) {
    const adicionar = numero + numero2
    console.log("adição " + adicionar)
    return adicionar
}
        adicionar(152,6)
/* CORREÇÃO DO PROFESSOR
function somar(numero,numero2){
return numero + numero2
}
console.log(somar(152,6))
*/

function subtracao(numero, numero2) {
    const subtracao = numero - numero2
    console.log("subtração " + subtracao)
    return subtracao
}
        subtracao(152,6)

function multiplicacao(numero, numero2) {
    const multiplicacao = numero * numero2
    console.log("multiplicação " + multiplicacao)
    return multiplicacao
}
        multiplicacao(152,6)

function divisao(numero, numero2){
    const divisao = numero / numero2
    console.log("divisão " + divisao)
    
    return divisao
}
        divisao(152,6)

function divisaoZero(numero){
    const divisaoZero = (numero / 0)
    console.log ("divisão por zero é aproximadamente " + divisaoZero)

    return divisaoZero
}
        divisaoZero(6)

/*Calculadora - Nível III - Funções Extras*/

function quadradoDoNumero(numero){
    const quadradoDoNumero = multiplicacao(numero,numero)
    console.log("potencia de 2 é " + quadradoDoNumero)
}
        quadradoDoNumero(2,3)


function mediaDeTresNumeros(numero,numero2,numero3){
    const mediaDeTresNumeros = (divisao((adicionar(numero,(adicionar(numero2,numero3)))), 3) )
    console.log("média de 3 números é " + mediaDeTresNumeros)
    return mediaDeTresNumeros
}
        mediaDeTresNumeros(2,3,7)


function calculaPorcentagem(numero,numero2){
    const calculaPorcentagem = multiplicacao((divisao(numero2,100)),numero)
    console.log(numero2 + "% de " + numero + " é " + calculaPorcentagem)
    return calculaPorcentagem
}
        calculaPorcentagem(2,3)


function geradorDePorcentagem(numero,numero2){
    const geradorDePorcentagem = divisao((multiplicacao(numero,100)),numero2)
    console.log(geradorDePorcentagem + " é " + numero2 + "% de " + numero)
    return geradorDePorcentagem
    }
        geradorDePorcentagem(2,3)

        /* templete strings
        console.log(`
       para uma string que pode dar enter é só usar a crase :)
        para chamar uma função aqui dentro precisa fazer um sifrão $ e colocar a função entre chaves

       
        soma: ${(adicionar(152,6))}
        
        `) */