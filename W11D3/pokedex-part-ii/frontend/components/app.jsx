import { Route } from "react-router-dom";

//Instead of rendering the PokemonIndexContainer directly,
// setup a root Route that will render the component when path="/"
const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
  ) 

  export default App;
