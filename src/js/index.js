const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'card-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.active')
        pokemonAtivoNaListagem.classList.remove('active')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('active')

    })
})