import React from 'react';
import { Provider } from 'react-redux';
// import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from "react-router-dom";


// const Root = ({ store }) => (
//   <Provider store={store}>
//       <PokemonIndexContainer/>
//   </Provider>
// );

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter> 
         <App/>
    </HashRouter>
  </Provider>
);

export default Root;

//The hashRouter is responsible for listening for changes to our browser's url. 
//When the url changes, the HashRouter determines which component to render based on which Route's path matches the url
//In order to avoid threading the store throughout components, we want to take advantage of our Provider