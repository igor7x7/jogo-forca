const novaPalavra = document.getElementById('nova-palavra')
const button = document.getElementById('add-palavra')

let nPalavra = ['gato', 'cachoro', 'cavalo', 'rinoceronte', 'camelo', 'tartaruga']

var addPalavra = function () {
    if (novaPalavra?.value == '') {
        console.log('erro')
    } else {
        nPalavra.push(novaPalavra?.value)
    }
    console.log(nPalavra)
    localStorage.setItem('arraydepalavras', JSON.stringify(nPalavra))
}

button?.addEventListener('click', (e) => {
    e.preventDefault()
    addPalavra()
})



