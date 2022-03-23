const section = document.querySelector('section')
const teste = document.getElementById('teste')
const criar = document.getElementById('criar')
const letra = document.getElementById('letra')
const msg = document.getElementById('msg')

let palavra = localStorage.getItem('arraydepalavras')

palavra = JSON.parse(palavra)

let palavraSort = palavra[Math.floor(Math.random() * palavra.length)]

console.log(palavraSort)

palavraSort = palavraSort.split('')

console.log(palavraSort)

let valor = false
let cont = false
let cont2 = 0


criar.addEventListener('click', () => {
    palavraSort.forEach(() => {
        section.innerHTML += '<div></div>'
    })
})

teste.addEventListener('click', () => {
    var divs = document.querySelectorAll('div')
    let i = 0


    divs.forEach(div => {
        //Preenche a div com a letra descoberta
        if (letra.value == palavraSort[i]) {
            div.innerText = letra.value.toUpperCase()
            cont = true
        }
        i++

        // controla a variavel para ser usada no if de vitoria
        if (div.innerText == '') {
            valor = false
        }
    })

    //intera o contador de erros
    if (cont == false) {
        cont2++
    }
    cont = false

    // mensagem de derrota ao 5 erro
    if (cont2 == 5) {
        msg.innerText = 'Você Perdeu!'
    }


    // condição de vitoria
    if (valor) {
        msg.innerText = 'Você Venceu!'
    }
    valor = true
})