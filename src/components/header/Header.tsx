import React from 'react';
import { navItems } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header: React.FC = ( ) => {
  return (
    <header>
       {navItems.map(item => (
        <Link key={item} to={`/${item.toLowerCase()}`}>
          <button className='navBtn'>
            {item}
          </button>
        </Link>
      ))}
    </header>
  );
};

export default Header;