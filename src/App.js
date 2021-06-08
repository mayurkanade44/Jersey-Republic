import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Home, About, SingleProduct, Error, Prodcuts } from "./pages";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/products'><Prodcuts/></Route>
        <Route exact path='/products/:id' children={<SingleProduct/>}></Route>
        <Route path='*'><Error/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
