import "./style.scss";
import { FiGithub } from 'react-icons/fi';

const style = {
    icons: {
        fontSize: 50,
        marginBottom: 10,
        color: "White"
    }
}

const Projects = () => {
    return (

        <section className="project" id="projects">
            <div className="row">
                <div class="col-lg-4 mx-auto">
                    <h1 className="h1-primary">Projects</h1>
                    <hr class="separator separator--line" />

                </div>
                <div class="col-lg-4 mx-auto">

                </div>
                <div class="col-lg-2 mx-auto">
                </div>
            </div>


            <div class="col-lg-12 mx-auto text-center work-columns m-5">

                <div class="row mx-auto" >
                    <div class="col-lg-3 mx-auto">

                        <h2>The Green Thumb</h2>
                        <img src="https://media.giphy.com/media/TlGLPCAX4SBOBSwmOd/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                        <p>An application that let the user search for any flower or plant on the database and
                             pull it's entire description and growth information.</p>

                        <a href="https://github.com/emmabauta/theGreenThumb" target="_blank" style={style.icons}><FiGithub /></a>
                        <a class="btn-draw" href="https://thegreenthumb.herokuapp.com/" target="_blank"><span>Deployed</span></a>

                    </div>

                    <div class="col-lg-3 mx-auto">

                        <h2>Employee Directory</h2>
                        <img src="https://media.giphy.com/media/qbxz8RYWkmiexz2Eqm/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                        <p> This react application assist the user by filtering thorugh a list. Using the search bar the list can be filtered by name, email and phone number.  </p>

                        <a href="https://github.com/LuisM-Hernandez/react_employee_directory" target="_blank" style={style.icons}><FiGithub /></a>
                        <a class="btn-draw" href="https://luism-hernandez.github.io/react_employee_directory/" target="_blank"><span>Deployed</span></a>

                    </div>

                    <div class="col-lg-3 mx-auto">

                        <h2>Day Planner</h2>
                        <img src="https://media.giphy.com/media/LkZl3KVXpHTTBhbyeR/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                        <p>A business hours day planner that takes the users input and
                        stores it on the local storage. Built in with moments.js</p>

                        <a href="https://github.com/LuisM-Hernandez/day_planner" target="_blank" style={style.icons}><FiGithub /></a>
                        <a class="btn-draw" href="https://luism-hernandez.github.io/day_planner/" target="_blank"><span>Deployed</span></a>

                    </div>

                    <div class="col-lg-3 mx-auto">

                        <h2>Fitness Tracker</h2>
                        <img src="https://media.giphy.com/media/ScPQnaE3YXJI9XTSuS/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                        <p>Fitness Tracker app let the user log exercises for the day and categorize them by cardio or resistance.  </p>

                        <a href="https://github.com/LuisM-Hernandez/fitness_tracker" target="_blank" style={style.icons}><FiGithub /></a>

                        <a class="btn-draw" href="https://mighty-hamlet-70481.herokuapp.com/?id=602dc132de63870015eed262" target="_blank"><span>Deployed</span></a>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;