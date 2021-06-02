import "./style.css";

const style = {
  icons: {
      fontSize: 20,
      margin: 10,
      color: "White"
  }
}
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg ">
      <a className="navbar-brand" href="#home">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="navbar-brand js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand js-scroll-trigger" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>




  );
}

export default Navbar;