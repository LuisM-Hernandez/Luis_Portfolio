import Navbar from "../Navbar"
import "./style.css";

const styles = {
    about: {
        padding: 140
    }
}

const About = () => {
    return ( 
        
        <section className="about" style={styles.about}>
        <div className="row">

            <div class="col-lg-4 mx-auto">
                <div class="photo">
                    <img src="" class="card-img-top rounded-circle" alt="profilephoto" />
                </div>
            </div>
            <div class="col-lg-8 mx-auto">
                <h2>About Me</h2>
                <p class="lead">Future web/software developer with 3 years of experience in electronics manufacturing and 4
                years in retail management. Proficient in english and spanish with a very short experience on C#. Originally
                from Gurabo, Puerto Rico and currently living in Kissimmee, Florida. I finished an associates in networking
        and now I'm working towards my carreer in web and software development.</p>
            </div>



        </div>
    </section>
     );
}
 
export default About;