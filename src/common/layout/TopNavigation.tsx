import { NavLink } from 'react-router-dom';

function TopNavigation() {
  return (
    <ul className="tab text-gray-3">
      <li>
        <NavLink className="navLink" to="/users">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/catalog">
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/checkout">
          Checkout
        </NavLink>
      </li>
      <li>
        <NavLink className="navLink" to="/orders">
          Orders
        </NavLink>
      </li>
    </ul>
  );
}

export default TopNavigation;
