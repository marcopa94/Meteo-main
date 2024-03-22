import { Navbar } from "react-bootstrap";
import logo from "../logo.png";

const Header = () => {
  return (
    <div>
      <Navbar className="justify-content-center">
        <Navbar.Brand>
          <img src={logo} width="200" height="200" className="d-inline-block align-top mx-auto " alt="logo" id="logo" />
          <p>
            <i>&copy; PalaWeather</i>{" "}
          </p>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
