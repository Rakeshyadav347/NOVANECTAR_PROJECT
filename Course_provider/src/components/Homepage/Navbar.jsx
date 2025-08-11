import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="navbar">
      <ul className="navbar-ul">
        <li className="img">
          <img src="Group 1000002913.png"></img>
        </li>
        <div className="nav-item">
          <li className="nav-items ho">Home</li>
          <li className="nav-items ho">Courses</li>
          <li className="nav-items ho">About us</li>
          <li className="nav-items ho">Contact us</li>
          <li className="nav-items ho">Blogs</li>
        </div>
        <li className="nav-items">
          <div className="bookm">
            <FaRegHeart />
          </div>
        </li>
        <li className="nav-items">
          <div className="bookm">
            <FaCartPlus />
          </div>
        </li>
        <li className="nav-items">
          <button>Sign up</button>
        </li>
        <li className="nav-items">
          <button className="log-btn">Login</button>
        </li>
      </ul>
    </header>
  );
};
export default Navbar;
