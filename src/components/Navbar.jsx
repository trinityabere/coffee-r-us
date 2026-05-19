import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/admin"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Admin Portal
      </NavLink>

    </div>
  );
}

export default Navbar;