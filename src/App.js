import './App.css';
import Home from "./components/Home/index";
import About from "./components/About/index";
import Navbar from "./components/Navbar/index";
import Projects from "./components/Projects/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    
   <Router>
     <Navbar/>
     <Route exact path="/" component={Home} /> 
   </Router>
  );
}

export default App;
