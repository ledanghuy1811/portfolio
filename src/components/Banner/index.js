import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Banner.module.scss';
import bannerImage from '~/assets/img/header-img.svg';

const cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'grid grid-cols-1 sm:grid-cols-12')}>
        <div className={cx('info', 'sm:col-span-7')}>
          <h3 className={cx('welcome')}>Welcome to my Portfolio</h3>
          <h1 className={cx('name')}>Hi! I'm Huy Web Developer</h1>
          <p className={cx('description')}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a href="#contact" className={cx('connect')}>
            <p className={cx('connect-text')}>Let's Connect</p>
            <spam className={cx('connect-icon')}>
              <FontAwesomeIcon icon={faArrowRight} />
            </spam>
          </a>
        </div>

        <div className={cx('image', 'sm:col-span-5')}>
          <img
            src={bannerImage}
            alt="Banner"
            className={cx('banner-img')}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
