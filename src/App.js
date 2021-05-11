import './App.css';
import Jumbotron from './components/Jumbotron/index';
import Home from "./components/Home/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
   <Router>
     <Home/>

   </Router>
  );
}

export default App;
