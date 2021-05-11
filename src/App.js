import './App.css';
// import Jumbotron from './components/Jumbotron/index';
import Home from "./components/Home/index";
import About from "./components/About/index";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
   <Router>
     <Navbar/>
     <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
        
   </Router>
  );
}

export default App;
