const novaPalavra = document.getElementById('nova-palavra')
const buttonAddPalavra = document.getElementById('add-palavra')

let nPalavra = ['gato', 'cachoro', 'cavalo', 'rinoceronte', 'camelo', 'tartaruga']
let palavra

buttonAddPalavra?.addEventListener('click', () => {
    nPalavra.push(novaPalavra.value)
    palavra = nPalavra
    novaPalavra.value = ''
    return palavra
})

console.log(palavra)
export default palavra



