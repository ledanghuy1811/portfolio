import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Logo from '~/assets/img/logo.svg';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={Logo} alt="Logo" />
        <div className={cx('content')}>
          <div className={cx('pages')}>
            <a className={cx('page-link')} href="/">
              Home
            </a>
            <a className={cx('page-link')} href="#skills">
              Skills
            </a>
            <a className={cx('page-link')} href="/">
              Projects
            </a>
          </div>
          <div className={cx('contact')}>
            <button>in</button>
            <button>f</button>
            <button>in</button>
            <button>let contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
