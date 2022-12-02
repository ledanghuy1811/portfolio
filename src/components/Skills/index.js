import React from 'react';
import classNames from 'classnames/bind';

import styles from './Skills.module.scss';
import HeaderContent from '../HeaderContent';
import SliderComponent from '../SliderComponent';

import colorShape from '~/assets/img/color-sharp.png';

const cx = classNames.bind(styles);

const Skills = () => {
  return (
    <div className={cx('wrapper')} id="skills">
      <div className={cx('container')}>
        <HeaderContent
          title="Skills"
          description="I start learning front-end skills in the third year of university 
          and here is what I have today"
        />
        <div className={cx('content')}>
          <SliderComponent />
        </div>
      </div>
      <img src={colorShape} alt="color-shape" className={cx('color-shape')} />
    </div>
  );
};

export default Skills;
