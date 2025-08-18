import "./Navbar.css";
import Button from "../../components/Button";

function Navbar() {
  return (
    <nav>
      <div className="logo">DJ</div>
      <div className="nav-buttons">
        <Button value={"ABOUT"} type={"navbar-button"} />
        <Button value={"SKILLS"} type={"navbar-button"} />
        <Button value={"PROJECTS"} type={"navbar-button"} />
        <Button value={"CONTACT"} type={"navbar-button"} />
      </div>
    </nav>
  );
}

export default Navbar;
