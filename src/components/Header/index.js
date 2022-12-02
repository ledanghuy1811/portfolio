import React, { useEffect, useState } from 'react';
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
    href: 'https://www.linkedin.com/in/l%C3%AA-huy-87762b20b/',
  },
  {
    name: 'facebook',
    icon: NavIcon2,
    href: 'https://www.facebook.com/profile.php?id=100009922054055',
  },
  {
    name: 'instagram',
    icon: NavIcon3,
    href: 'https://www.instagram.com/hii_iamhuy/',
  },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activePageLink, setActivePageLink] = useState([
    {
      name: 'Home',
      active: true,
      href: '#app',
    },
    {
      name: 'Skills',
      active: false,
      href: '#skills',
    },
    {
      name: 'Projects',
      active: false,
      href: '#project',
    },
  ]);

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

  const handleActivePage = (e) => {
    setActivePageLink((prev) => {
      for (let item of prev) {
        if (item.name === e.target.innerHTML) item.active = true;
        else item.active = false;
      }

      return [...prev];
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const menu = document.getElementById('toggle-menu');

      if (window.scrollY > 50) {
        header.classList.remove(`${cx('scroll-before')}`);
        header.classList.add(`${cx('scroll-after')}`);
        menu.classList.remove(`${cx('menu-before')}`);
        menu.classList.add(`${cx('menu-after')}`);
      } else {
        header.classList.remove(`${cx('scroll-after')}`);
        header.classList.add(`${cx('scroll-before')}`);
        menu.classList.remove(`${cx('menu-after')}`);
        menu.classList.add(`${cx('menu-before')}`);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const menu = document.getElementById('toggle-menu');

      if (window.innerWidth > 640) {
        menu.style.display = 'none';
      } else {
        if (toggleMenu) menu.style.display = 'initial';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [toggleMenu]);

  return (
    <header id="header" className={cx('wrapper')}>
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
            {activePageLink.map((pageLink) => (
              <a
                key={pageLink.name}
                className={cx('page-link', { 'active-link': pageLink.active })}
                href={pageLink.href}
                onClick={handleActivePage}
              >
                {pageLink.name}
              </a>
            ))}
          </div>

          <div className={cx('contact', 'hidden sm:flex')}>
            {contactIcon.map((icon) => (
              <Button href={icon.href} target='_blank' circle key={icon.name}>
                <img src={icon.icon} alt={icon.name} />
              </Button>
            ))}
            <div className="hidden lg:block ml-10">
              <Button large white rectangle href="#contact">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="toggle-menu" className={cx('toggle-menu', 'sm:hidden')}>
        {activePageLink.map((pageLink) => (
          <a
            key={pageLink.name}
            className={cx('page-link')}
            href={pageLink.href}
            onClick={handleToggleMenu}
          >
            {pageLink.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
