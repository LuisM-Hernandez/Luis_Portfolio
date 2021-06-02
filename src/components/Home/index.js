import Navbar from "../Navbar/index";
import Header from "../Header/index";
import About from "../About/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";
import "./style.css";


const Home = () => {
    return (


        <div id="home" className="wrapper background">
            <Navbar />
            <Header />

            <About />
{/* 
            <Projects />
            
            <Contact /> */}
        </div>
    );
}

export default Home;