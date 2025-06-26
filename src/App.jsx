import useFetchCharacters from './hooks/useFetchCharacters'

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/charmander';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

function App() {
  const { characters: pokemon, loading: loadingPokemon } = useFetchCharacters(urlPokemon)
  const { characters: rick, loading: loadingRick } = useFetchCharacters(urlRick)
  
  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {loadingPokemon ? (
        <p>Cargando...</p>
      ) : (
        <>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {loadingRick ? (
        <p>Cargando...</p>
      ) : (
        <>
          <p>{rick.name}</p>
          <img src={rick.image} alt={rick.name} />
        </>
      )}
    </div>
  )
}

export default App