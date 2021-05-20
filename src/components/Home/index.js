import Navbar from "../Navbar/index";
import Jumbotron from "../Jumbotron/index";
import About from "../About/index";
import "./style.css";
import Projects from "../Projects";


const Home = () => {
    return ( 
        <div className="wrapper">
            <Jumbotron/>

            <div className="wrapper">
                <About/>
            </div>

            <div className="wrapper">
                <Projects/>
            </div>
        </div>
     );
}
 
export default Home;