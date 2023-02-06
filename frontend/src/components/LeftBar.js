import "./LeftBar.css";
import { Link } from "react-router-dom";

function LeftBar() {

  return (
    <div className="leftBarContent">
    <img className="leftBarLogo" alt="logo" />
    <div className="menu">
        <Link to="/" className="link">
        <div className="menuItems">
          <img className="leftBarLogo" alt="home" />
        </div>
        </Link>
        <Link to="/my-blogs" className="link">
        <div className="menuItems">
          <img className="leftBarLogo" alt="book" />
        </div>
        </Link>
        <Link to="/new-blog" className="link">
        <div className="menuItems">
          <img className="leftBarLogo" alt="pen" />
        </div>
        </Link>
    </div>
    </div>
  );
}

export default LeftBar;
