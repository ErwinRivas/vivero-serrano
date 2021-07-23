import React, { useState } from 'react';
import { SubMenuItems } from './SubMenuItems';
import './dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
  const [click, setClick] = useState(false);

  return (
    <>
      <ul
        onClick={props.onCloseMobileMenu}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {SubMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;