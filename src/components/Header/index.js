import "./style.scss";
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const style = {
    linkedin: {
        fontSize: 40,
        color:"White",
        padding:45

    },

    github:{
        fontSize: 40,
        color:"White",

    }
}



const Header = () => {
    return (

        <div className="l">
            <h1 class="heading-primary">
                <span>Luis Hernandez</span>
            </h1>

            <p class="text">Web Developer| HTML | CSS | Javascript</p>
            {/* <a class="btn-draw" href="#contact"><span>Contact Me</span></a> */}

            <a href="https://www.linkedin.com/in/luis-hernandez-1a55811b4/" target="_blank" style={style.linkedin}><FaLinkedin /></a>

            <a href="https://github.com/LuisM-Hernandez" target="_blank" style={style.github}><FiGithub /></a>

            
        </div>

    );
}

export default Header;