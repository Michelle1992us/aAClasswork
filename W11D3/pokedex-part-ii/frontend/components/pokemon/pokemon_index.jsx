import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }

  // Refactor PokemonIndex to utilize pokemon_index_items. 
  //Your PokemonIndex should map each pokemon objects 
  //in this.props.pokemon to a PokemonIndexItem

  const pokemonItems = pokemon.map(poke => (
    <PokemonIndexItem key={poke.id} pokemon={poke} />
  ));
  
  render(){
    return (
    // <section className="pokedex">
    //   <ul>
    //   {this.props.pokemon.map((poke) => (
    //     <li className="pokemon-index-item">
    //       <span>{poke.id}</span>
    //       <img src={poke.imageUrl}/>
    //       <span>{poke.name}</span>
    //     </li>
    //   ))}
    //   </ul>
    // </section>

      <section className="pokedex">
        <ul>{pokemonItems}</ul>
      </section>;
    )
  }

}
  
  export default PokemonIndex;