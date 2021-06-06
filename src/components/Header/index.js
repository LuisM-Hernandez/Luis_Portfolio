import "./style.scss";
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GrMail } from 'react-icons/gr';


const style = {

    icons:{
        fontSize: 40,
        color:"White",
        padding:17

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
            <h4>Contact Me</h4>

            <a href="https://www.linkedin.com/in/luis-hernandez-1a55811b4/" target="_blank" style={style.icons}><FaLinkedin /></a>
            <a href="mailto:m.luishernandez@outlook.com" style={style.icons}><GrMail /></a>
            <a href="https://github.com/LuisM-Hernandez" target="_blank" style={style.icons}><FiGithub /></a>

            
        </div>

    );
}

export default Header;