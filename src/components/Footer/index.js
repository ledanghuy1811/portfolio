import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Button from '../Button';

import logo from '~/assets/img/logo.svg';
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

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div
          className={cx('email-subscribe', 'grid grid-cols-1 lg:grid-cols-2')}
        >
          <h1 className={cx('title')}>
            If you want to discuss more, please email me by follow email!
          </h1>
          <div className={cx('email-box')}>
            <span className={cx('email')}>Huygamo567@gmail.com</span>
            <Button large primary href="mailto:huygamo567@gmail.com">
              Send Email
            </Button>
          </div>
        </div>

        <div className={cx('footer-content')}>
          <img src={logo} alt="Logo" className={cx('logo-img')} />
          <div className={cx('contact')}>
            <div className={cx('icon')}>
              {contactIcon.map((icon) => (
                <Button href={icon.href} target='_blank' circle key={icon.name}>
                  <img src={icon.icon} alt={icon.name} />
                </Button>
              ))}
            </div>
            <span className={cx('copy-right')}>
              Copyright 2022 by @LeDinhHuy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
