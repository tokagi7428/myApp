import Contact from "./Contact";
import Pofolio from "./Pofolio";
import "./css/Menu.css";
function Menu() {
  return (
    <nav>
      <div className="menu">
        <div className="menu-bar">
          <div>
            <h1>Menu</h1>
          </div>
          <ul>
            <a href="home">
              <li>Home</li>
            </a>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <Pofolio />
      <Contact />
    </nav>
  );
}

export default Menu;
