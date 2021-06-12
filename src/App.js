import { Nav, Box, About, Shop, Itemdetail } from "./components";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/box" component={Box}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/shop/:id">{props => <Itemdetail {...props} />}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

export default App;
