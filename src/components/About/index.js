import Navbar from "../Navbar"
import profilepic from "../About/profilephoto.jpg"
import "./style.css";



const styles = {
    about: {
        padding: 140
    },
}

const About = () => {
    return (

        <section id="about" className="about" style={styles.about}>
            <div className="row">

                <div class="col-lg-4 mx-auto">
                    <div class="photo">
                        <img src={profilepic} class="card-img-top rounded-circle photo" alt="profilephoto" />
                    </div>
                </div>
                <div class="col-lg-8 mx-auto">
                    <h2>About Me</h2>
                    <p class="lead">

                        I'm a web developer with 3 years of experience in electronics manufacturing and management. Goal oriented and passionate about learning new technologies. Proficient in english and spanish. Currently living in Kissimmee, Florida. I finished an associates in networking and got a certificate as a Full Stack Web Dev from the UCF.

                    {/* Future web/software developer with 3 years of experience in electronics manufacturing and 4
                years in retail management. Proficient in english and spanish with a very short experience on C#. Originally
                from Gurabo, Puerto Rico and currently living in Kissimmee, Florida. I finished an associates in networking
        and now I'm working towards my carreer in web and software development.  */}
                    </p>

                    <iframe src="https://api.badgr.io/public/assertions/-aTK6j42SuyJlqlTgy9QBQ?embedVersion=1&amp;embedWidth=330&amp;embedHeight=186&amp;identity__email=m.luishernandez%40outlook.com" title="Badge: UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]" style={styles.badger}>

                    </iframe>

                    

                    



                </div>



            </div>
        </section>
    );
}

export default About;