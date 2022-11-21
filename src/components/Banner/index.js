import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Banner.module.scss';
import bannerImage from '~/assets/img/header-img.svg';

const cx = classNames.bind(styles);

const Banner = () => {
  const [rotateText, setRotateText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [timer, setTimer] = useState(400);
  const text = ['Web Developer', 'Web Designer', 'UI/UX Designer'];

  useEffect(() => {
    let ticker = setInterval(() => {
      handleRotateText();
    }, timer);

    return () => {
      clearInterval(ticker);
    };
  }, [rotateText]);

  const handleRotateText = () => {
    let index = loopNum % text.length;
    let fullText = text[index];
    let updateText = isDelete
      ? fullText.substring(0, rotateText.length - 1)
      : fullText.substring(0, rotateText.length + 1);

    setRotateText(updateText);

    if (isDelete) {
      setTimer((prev) => prev / 2);
    }

    if (!isDelete && updateText === fullText) {
      setIsDelete(true);
      setTimer(2000);
    } else if (isDelete && updateText === '') {
      setIsDelete(false);
      setLoopNum((loopNum + 1) % text.length);
      setTimer(400);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'grid grid-cols-1 sm:grid-cols-12')}>
        <div className={cx('info', 'sm:col-span-7')}>
          <h3 className={cx('welcome')}>Welcome to my Portfolio</h3>
          <h1 className={cx('name')}>
            <span>Hi! I'm Huy </span>
            <span className={cx('rotate-text')}>{rotateText}</span>
          </h1>
          <p className={cx('description')}>
            Hi there, I'm Huy. I'm a senior in Ha Noi University of Science and
            Techonology and also a student who interested in web programming.
            I'm currently learning about front-end web programming and may be in
            future back-end web programming!! :D
          </p>
          <a href="#contact" className={cx('connect')}>
            <p className={cx('connect-text')}>Let's Connect</p>
            <span className={cx('connect-icon')}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        </div>

        <div className={cx('image', 'sm:col-span-5')}>
          <img src={bannerImage} alt="Banner" className={cx('banner-img')} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
