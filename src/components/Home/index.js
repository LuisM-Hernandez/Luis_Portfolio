import Navbar from "../Navbar/index";
import Header from "../Header/index";
import About from "../About/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";
import "./style.css";


const Home = () => {
    return (

        <div id="home" className="wrapper">
            <section className="top">
                <Navbar />
                <Header />

            </section>

            <div className="wrapper">
                <About />
            </div>

            <div className="wrapper">
                <Projects />
            </div>
            <div className="wrapper">
                <Contact />
            </div>
        </div>
    );
}

export default Home;