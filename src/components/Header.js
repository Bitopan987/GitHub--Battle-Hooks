import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <nav>
        <NavLink activeClassName="" to="/">
          <button className="text-2xl font-bold">Popular</button>
        </NavLink>
        <NavLink activeClassName="" to="/battle">
          <button className="text-2xl font-bold">Battle</button>
        </NavLink>
        <button
          className={
            props.darkMode
              ? 'px-3 py-2 bg-gray-700 rounded'
              : 'px-3 py-2 bg-gray-200 rounded'
          }
          onClick={props.toggleDarkMode}
        ></button>
      </nav>
    </header>
  );
}

export default Header;
