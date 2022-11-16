import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Button from '../Button';

import Logo from '~/assets/img/logo.svg';
import NavIcon1 from '~/assets/img/nav-icon1.svg';
import NavIcon2 from '~/assets/img/nav-icon2.svg';
import NavIcon3 from '~/assets/img/nav-icon3.svg';

const cx = classNames.bind(styles);

const Header = () => {
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

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <a href="/">
          <img className={cx('logo')} src={Logo} alt="Logo" />
        </a>
        <div className={cx('content')}>
          <div className={cx('pages')}>
            <a className={cx('page-link')} href="#app">
              Home
            </a>
            <a className={cx('page-link')} href="#skills">
              Skills
            </a>
            <a className={cx('page-link')} href="#project">
              Projects
            </a>
          </div>
          <div className={cx('contact')}>
            {contactIcon.map((icon) => (
              <Button circle key={icon.name}>
                <img src={icon.icon} alt={icon.name} />
              </Button>
            ))}
            <div className="ml-10">
              <Button large rectangle href="#contact">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
