import { FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import "./style.scss";

const style = {
    icons: {
        fontSize: 50,
    }
}

const Contact = () => {
    return (

        <section id="contact">
            <div class="row">
                <div class="col-lg-4 mx-auto">
                    <h1>Contact Me</h1>
                    <hr class="separator separator--line" />
                    <p>If you wish to contact me the Great, Amazing, Ultra Powerfull Risky Bizcuit you can click the links below</p>
                    <a href="mailto:m.luishernandez@outlook.com" style={style.icons}><GrMail /></a>
                    <a href="https://www.linkedin.com/in/luis-hernandez-1a55811b4/" target="_blank" style={style.icons}><FaLinkedin /></a>

                </div>
                <div class="col-lg-4 mx-auto">
                </div>
                <div class="col-lg-2 mx-auto">
                </div>
            </div>
        </section>
    );
}

export default Contact;