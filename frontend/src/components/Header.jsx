import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex border-b border-b-black py-3 px-2 justify-between items-center">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      <ul className="flex content-between gap-8">
        <li>
          <Link to="/login" className="flex gap-2 items-center">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="flex gap-2 items-center">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
