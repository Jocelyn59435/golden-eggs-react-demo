import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from './data/homeNavData';
import { subItems } from './data/homeSubNavData';
import { AiOutlineDown } from 'react-icons/ai';
import { ReactElement } from 'react';

export default function Navbar(): ReactElement {
  const [hoverIndex, setHoverIndex] = React.useState(-1);

  return (
    <nav className='homepage-nav'>
      <div>
        <a href='/'>
          <img src='../../assets/golden-eggs-logo-white.jpg' alt='logo' />
        </a>
      </div>
      <div>
        <ul className='nav-flex'>
          {navItems.map((navItem, index) => (
            <li
              key={index}
              className='fix-disappear-dropdown'
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <NavLink
                exact
                to={navItem.link}
                activeStyle={{ color: 'rgba(17, 17, 17, 0.85)' }}
              >
                {navItem.submenu !== -1 ? (
                  <span>
                    {navItem.itemName}
                    <AiOutlineDown />
                  </span>
                ) : (
                  navItem.itemName
                )}
              </NavLink>

              {hoverIndex === index && navItem.submenu !== -1 ? (
                <div className='align-submenu'>
                  <ul className='submenu'>
                    {subItems[navItem.submenu].map(
                      ({ subName, subLink }, index) => (
                        <li key={index}>
                          <NavLink to={subLink}>{subName}</NavLink>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
