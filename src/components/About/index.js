import profilepic from "../About/profilephoto.jpg"
import "./style.css";



// const styles = {
//     about: {
//         padding: 140
//     },
// }

const About = () => {
    return (

        <section id="about" className="about">
            <div className="row">

                <h1 class="header-primary">About Me</h1>

                <div class="col-lg-4 mx-auto ">
                    <div class="photo">
                        <img src={profilepic} class="card-img-top rounded-circle photo" alt="profilephoto" />
                    </div>
                </div>

                <div class="col-lg-6 mx-auto">
                    <p class="lead">
                        I'm a web developer with 3 years of experience in electronics manufacturing and management. Goal oriented and passionate about learning new technologies. Proficient in english and spanish. Currently living in Kissimmee, Florida. I finished an associates in networking and got a certificate as a Full Stack Web Dev from the UCF.
                    </p>
                    <iframe src="https://api.badgr.io/public/assertions/-aTK6j42SuyJlqlTgy9QBQ?embedVersion=1&amp;embedWidth=330&amp;embedHeight=186&amp;identity__email=m.luishernandez%40outlook.com" title="Badge: UCF Coding Boot Camp (Full-Stack Web Development)[Full-Time]" >

                    </iframe>
                </div>

                <div class="col-lg-2 mx-auto">
                </div>
                
            </div>
        </section>
    );
}

export default About;