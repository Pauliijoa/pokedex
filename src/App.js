import './App.css';
import datos from './components/pokemonn';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState('')
  const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

  const onchangefn = (event) => {
    setPokemon(event.target.value)
  }
  const onclickfn = () => {
    //setPokemon( { label:pokemon})
    console.log(pokemon, "https://pokeapi.co/api/v2/pokemon/" + pokemon)
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(response => response.json())
      .then(
        (pokemonData) => {
          console.log(pokemonData)
          setPokemonD(pokemonData)
        }
      )

  }
  return (
    <>
      <div className="App">
        <h1>POKEMON!</h1>
        <input type="text" value={pokemon} onChange={onchangefn} />
        <button type="text" className="btn btn-light" onClick={onclickfn}>buscar</button>

        <img src={pokemonD.sprites.front_default}></img>
        <img src={pokemonD.sprites.back_default}></img>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">orden de tu pokemo</th>
              <th scope="col">Nombre</th>
              <th scope="col">experiencia</th>
              <th scope="col">identificador</th>
              <th scope="col">altura</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{pokemonD.order}</th>
              <td>{pokemonD.name}</td>
              <td>{pokemonD.base_experience}</td>
              <td>{pokemonD.id}</td>
              <td>{pokemonD.height}</td>
            </tr>
          </tbody>
        </table>
        <body>
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/7/7d/latest/20141214140029/Pikachu_coqueta_ROZA.png" class="rounded float-start" alt="" />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d9/latest/20200214190405/Charmander_HOME.png/150px-Charmander_HOME.png" class="rounded float-end" alt="" />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/aa/latest/20210524164947/Psyduck_HOME.png/150px-Psyduck_HOME.png" class="rounded float-start" alt="..." />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/06/latest/20200214185855/Squirtle_HOME.png/150px-Squirtle_HOME.png" class="rounded float-end" alt="..." />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/11/latest/20170617012619/Ekans.png/200px-Ekans.png" class="rounded float-start" alt="..." />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/72/latest/20210524164805/Lucario_HOME.png/150px-Lucario_HOME.png" class="rounded float-end" alt="..." />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9a/latest/20180809160020/Mega-Blastoise.png/130px-Mega-Blastoise.png" class="rounded float-start" alt="" />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/96/latest/20200214193815/Dragonite_HOME.png/150px-Dragonite_HOME.png" class="rounded float-end" alt="" />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/3c/latest/20210524164655/Golem_HOME.png/150px-Golem_HOME.png" class="rounded float-start" alt="" />
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/13/latest/20210524164846/Mewtwo_HOME.png/150px-Mewtwo_HOME.png" class="rounded float-end" alt=""></img>
        </body>

      </div>



    </>
  );
}


export default App;