const section = document.querySelector('section')
const teste = document.getElementById('teste')
const criar = document.getElementById('criar')
const letra = document.getElementById('letra')
const msg = document.getElementById('msg')

let palavra = localStorage.getItem('arraydepalavras')

palavra = JSON.parse(palavra)

let palavraSort = palavra[Math.floor(Math.random() * palavra.length)]

palavraSort = palavraSort.split('')

let valor = false
let cont = false
let cont2 = 0
let start = true
let verificar = true


criar.addEventListener('click', () => {
    if (start) {
        palavraSort.forEach(() => {
            section.innerHTML += '<div></div>'
        })
        start = false
    }

})

teste.addEventListener('click', () => {
    if (verificar) {
        var divs = document.querySelectorAll('div')
        let i = 0


        divs.forEach(div => {
            //Preenche a div com a letra descoberta
            if (letra.value == palavraSort[i]) {
                div.innerText = letra.value.toUpperCase()
                cont = true
                letra.value = ''
            }
            i++

            // controla a variavel para ser usada no if de vitoria
            if (div.innerText == '') {
                valor = false
            }
        })
    }

    //intera o contador de erros
    if (cont == false) {
        cont2++
    }
    cont = false

    // mensagem de derrota ao 5 erro
    if (cont2 == 5) {
        msg.innerText = 'Você Perdeu!'
        verificar = false
    }


    // condição de vitoria
    if (valor) {
        msg.innerText = 'Você Venceu!'
    }
    valor = true
})