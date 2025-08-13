import "./Navbar.css";
import Button from "../components/Button";

function Navbar() {
  return (
    <nav>
      <div className="logo"></div>
      <div className="nav-buttons">
        <Button value={"About"} type={"navbar-button"} />
        <Button value={"Skills"} type={"navbar-button"} />
        <Button value={"Projects"} type={"navbar-button"} />
        <Button value={"Contact"} type={"navbar-button"} />
      </div>
    </nav>
  );
}

export default Navbar;
