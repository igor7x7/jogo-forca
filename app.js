const section = document.querySelector('section')
const criar = document.getElementById('criar')
const msg = document.getElementById('msg')
const erros = document.getElementById('erros')
const enforcado = document.getElementById('enforcado')

let palavra = localStorage.getItem('arraydepalavras')

palavra = JSON.parse(palavra)

let palavraSort = palavra[Math.floor(Math.random() * palavra.length)]

palavraSort = palavraSort.split('')

let valor = false
let cont = false
let cont2 = 0
let start = true
var letrasErradas = []
var recarregar = false

criar.addEventListener('click', () => {
    if (recarregar) {
        location.reload()
    }
    if (start) {
        palavraSort.forEach(() => {
            section.innerHTML += '<div></div>'
        })
        start = false
    }

})

document.addEventListener('keydown', (e) => {

    var key = e.key.toLowerCase()
    var divs = document.querySelectorAll('div')
    let i = 0

    divs.forEach(div => {
        //Preenche a div com a letra descoberta
        if (key == palavraSort[i]) {
            div.innerText = key.toUpperCase()
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
        letrasErradas.push(key.toUpperCase())
        erros.innerText = letrasErradas
        console.log(cont2)
        enforcado.src = `../imgs/forca-${cont2}.png`
        console.log(letrasErradas)
    }
    cont = false

    // mensagem de derrota ao 5 erro
    if (cont2 == 5) {
        msg.innerText = 'Você Perdeu!'
        recarregar = true
    }


    // condição de vitoria
    if (valor) {
        msg.innerText = 'Você Venceu!'
        recarregar = true
    }
    valor = true
})