const styles = {
    jumbotron:{
        background:"#94A9AF",
        color: "#E6F7F5",
        margin: 100
    }
}

const Jumbotron = () => {
    return (
        
        <div className="jum" >           
        <div className="jumbotron" style={styles.jumbotron}>
            <h1 className="display-4 text-center">Full Stack Web Developer</h1>
            <hr className="my-4 hrstyle" />
            <p className="lead text-center">HTML | CSS | JavaScript| React | Express | MongoDB </p>
        </div>

        </div>
    );
}

export default Jumbotron;