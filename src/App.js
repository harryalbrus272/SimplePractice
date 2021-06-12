import { Nav, Box, About, Shop } from "./components";
import { BrowserRouter, Route, Link } from 'react-router-dom';
function App() {
  return <div className="App">
    <Nav />
    <Box />
    <About />
    <Shop />
  </div>;
}

export default App;
