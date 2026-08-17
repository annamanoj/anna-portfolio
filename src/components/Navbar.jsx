import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Anna<span>⚙</span>
      </div>

      <ul className="nav-links">

        <li><a href="#about">ABOUT</a></li>

        <li><a href="#projects">PROJECTS</a></li>

        <li><a href="#achievements">ACHIEVEMENTS</a></li>

        <li><a href="#skills">SKILLS</a></li>

        <li><a href="#education">EDUCATION</a></li>

        <li><a href="#contact">CONTACT</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;