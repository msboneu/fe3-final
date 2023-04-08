import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context'

const Navbar = () => {
  const { theme, changeTheme } = useContext(GlobalContext);
  
  return (
    <nav className={theme === "dark" ? "dark" : ""}>
      <div>DH Odonto</div>
      <div className='navigation'>
        <ul>
          {["home", "contact", "favs"].map((link) => (
            <li key={link}>
              <NavLink to={`/${link}`}>{link}</NavLink>
            </li>
          ))}
        </ul>
        <button onClick={() => changeTheme(theme)} className={`${theme === "dark" ? "dark" : ""}`}>
          Change theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar