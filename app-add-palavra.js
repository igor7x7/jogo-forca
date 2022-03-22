const novaPalavra = document.getElementById('nova-palavra')
const buttonAddPalavra = document.getElementById('add-palavra')


function novaPlavra() {
    buttonAddPalavra.addEventListener('click', () => {
        palavra = novaPalavra.value
        return palavra
    })

}

export default novaPalavra()



