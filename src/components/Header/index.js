import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Button from '../Button';

import Logo from '~/assets/img/logo.svg';
import NavIcon1 from '~/assets/img/nav-icon1.svg';
import NavIcon2 from '~/assets/img/nav-icon2.svg';
import NavIcon3 from '~/assets/img/nav-icon3.svg';

const cx = classNames.bind(styles);

const contactIcon = [
  {
    name: 'linked-in',
    icon: NavIcon1,
  },
  {
    name: 'facebook',
    icon: NavIcon2,
  },
  {
    name: 'instagram',
    icon: NavIcon3,
  },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const test = (e) => {
    console.log(e.target.innerHTML);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);

    const menu = document.getElementById('toggle-menu');

    if (toggleMenu) {
      menu.classList.remove(`${cx('active')}`);
      menu.classList.add(`${cx('disabled')}`);
      setTimeout(() => (menu.style.display = 'none'), 500);
    } else {
      menu.style.display = 'initial';
      menu.classList.remove(`${cx('disabled')}`);
      menu.classList.add(`${cx('active')}`);
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <a href="/">
          <img className={cx('logo')} src={Logo} alt="Logo" />
        </a>
        <div className={cx('content')}>
          <button
            className={cx('toggle-btn', 'sm:hidden')}
            onClick={handleToggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={cx('pages', 'hidden sm:flex')}>
            <a className={cx('page-link')} href="#app" onClick={test}>
              Home
            </a>
            <a className={cx('page-link')} href="#skills">
              Skills
            </a>
            <a className={cx('page-link')} href="#project">
              Projects
            </a>
          </div>

          <div className={cx('contact', 'hidden sm:flex')}>
            {contactIcon.map((icon) => (
              <Button circle key={icon.name}>
                <img src={icon.icon} alt={icon.name} />
              </Button>
            ))}
            <div className="hidden lg:block ml-10">
              <Button large rectangle href="#contact">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="toggle-menu" className={cx('toggle-menu', 'sm:hidden')}>
        <a className={cx('page-link')} href="#app" onClick={test}>
          Home
        </a>
        <a className={cx('page-link')} href="#skills">
          Skills
        </a>
        <a className={cx('page-link')} href="#project">
          Projects
        </a>
      </div>
    </header>
  );
};

export default Header;
