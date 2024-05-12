import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="flex border-b border-b-black py-3 px-2 justify-between items-center">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      <ul className="flex content-between gap-8">
        {user ? (
          <button onClick={onLogout} className="flex gap-2 items-center">
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
