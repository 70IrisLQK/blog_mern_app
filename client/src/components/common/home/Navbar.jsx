import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div id='navbar' className='navbar'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <input type='checkbox' id='toggle' />
            <div className='image-menubar'>
              <Link to='' className='image'>
                <img
                  src='https://www.seekpng.com/png/full/145-1459379_in-blog-comment-there-are-many-users-to.png'
                  alt='logo'
                />
              </Link>
              <label htmlFor='toggle' className='menu-icon'>
                <span>
                  <i class='fa-solid fa-list'></i>
                </span>
              </label>
            </div>
          </div>
          <div className='col-8'>
            <ul className='link-list'>
              <li className='link-item'>
                <Link to='/about'>About</Link>
              </li>
              <li className='link-item'>
                <Link to='/contact'>Contact</Link>
              </li>
              <li className='link-item'>
                <Link to='/policy'>Policy</Link>
              </li>
              <div className='social-icons'>
                <li className='link-item'>
                  <Link to='/about'>
                    <span className='icon'>
                      <i className='fa-brands fa-facebook-square'></i>
                    </span>
                  </Link>
                </li>
                <li className='link-item'>
                  <Link to='/about'>
                    <span className='icon'>
                      <i className='fa-brands fa-github-square'></i>
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
