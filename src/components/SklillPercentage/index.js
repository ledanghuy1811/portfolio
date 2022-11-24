import React from 'react';
import classNames from 'classnames/bind';

import styles from './SkillPercentage.module.scss';

const cx = classNames.bind(styles);

const SkillPercentage = ({ title, imageUrl }) => {
  return (
    <div className={cx('wrapper')}>
      <img src={imageUrl} alt="Percentage" className={cx('image')} />
      <h3 className={cx('title')}>{title}</h3>
    </div>
  );
};

export default SkillPercentage;
