import "./style.css";

const styles = {
    projects: {
        margin: -90
    }
}

const Projects = () => {
    return ( 
      
        <div className="wrapper">
            <header class="head-color text-black">
                <div class="container text-center">
                    <h1>Projects</h1>
                </div>
            </header>
            <section id="projects">
                <div class="col-lg-12 mx-auto text-center">
                    <div class="row mx-auto " style={styles.projects}>
                        <div class="col-lg-3 mx-auto">
                            <h2>The Guilty One</h2>
                            <img src="https://media0.giphy.com/media/3Ytdt5XnyCNMLjhHWA/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                            <p>An app that will help the user monitor their caloric intake and
                            show them the nutrition facts of the items they are consuming. </p>
                            <button type="button" class=" mr-3 btn-sm btn-1" >
                                <a href="https://github.com/v1zconde/The_Guilty_One" target="_blank" class="webref"> Repository </a>
                            </button>
                            <button type="button" class=" mr-3 btn-sm btn-2" >
                                <a href="https://v1zconde.github.io/The_Guilty_One" target="_blank" class="webref2"> Deployed </a>
                            </button>
                        </div>

                        <div class="col-lg-3 mx-auto">
                            <h2>The Green Thumb</h2>
                            <img src="https://media.giphy.com/media/TlGLPCAX4SBOBSwmOd/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                            <p>An application that let the user search for any flower or plant on the database and
                             pull it's entire description.</p>
                            <button type="button" class=" mr-3 btn-sm btn-1" >
                                <a href="https://github.com/emmabauta/theGreenThumb" target="_blank" class="webref"> Repository </a>
                            </button>
                            <button type="button" class=" mr-3 btn-sm btn-2" >
                                <a href="https://github.com/emmabauta/theGreenThumb" target="_blank" class="webref2"> Deployed </a>
                            </button>
                        </div>

                        <div class="col-lg-3 mx-auto">
                            <h2>Day Planner</h2>
                            <img src="https://media.giphy.com/media/LkZl3KVXpHTTBhbyeR/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                            <p>A business hours day planner that takes the users input and
          stores it on the local storage. Built in with moments.js</p>
                            <button type="button" class=" mr-3 btn-sm btn-1" >
                                <a href="https://github.com/LuisM-Hernandez/day_planner" target="_blank" class="webref"> Repository </a>
                            </button>
                            <button type="button" class=" mr-3 btn-sm btn-2" >
                                <a href="https://luism-hernandez.github.io/day_planner/" target="_blank" class="webref2"> Deployed </a>
                            </button>
                        </div>

                        <div class="col-lg-3 mx-auto">
                            <h2>8-Bit Burger</h2>
                            <img src="https://media.giphy.com/media/GoUem3Ls6i6mDzV1EE/giphy.gif" width="300px" height="250px" alt=" placeholder" />
                            <p>Burger Logger is a restaurant app that lets users input the names of burgers they'd like to eat and move it to a wait or devour list.</p>
                            <button type="button" class=" mr-3 btn-sm btn-1" >
                                <a href="https://github.com/LuisM-Hernandez/burger_logger_app" target="_blank" class="webref"> Repository </a>
                            </button>
                            <button type="button" class=" mr-3 btn-sm btn-2" >
                                <a href="https://gentle-crag-34867.herokuapp.com/" target="_blank" class="webref2"> Deployed </a>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Projects;