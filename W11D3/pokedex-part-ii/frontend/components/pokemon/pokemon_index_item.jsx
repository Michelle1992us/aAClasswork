import React from 'react';
import { Link } from "react-router-dom";

// Your PokemonIndexItem should return a li containing information on a pokemon's name and image_url. 
//This information should be served as props.
//Inside each li, wrap the pokemon information in a Link tag. 
//Give it a to prop with the path for the frontend pokemon show page (/pokemon/:pokemonId)

class PokemonIndexItem extends React.Component{
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        <li className="pokemon-index-item">
          <Link to={`/pokemon/${this.props.pokemon.id}`}>
            <span>{this.props.pokemon.id}</span>
            <img src={this.props.pokemon.imageUrl}/>
            <span>{this.props.pokemon.name}</span>
          </Link>
        </li>
      )
    }
  }

export default PokemonIndexItem;