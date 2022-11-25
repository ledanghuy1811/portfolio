import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProjectComponent.module.scss';

const cx = classNames.bind(styles);

const ProjectComponent = ({ href, imgSrc, title, description }) => {
  return (
    <a href={href} target="_blank" className={cx('wrapper')} rel="noreferrer">
      <img src={imgSrc} alt={title} className={cx('project-img')} />
      <div className={cx('content')}>
        <h1 className={cx('title')}>{title}</h1>
        <p className={cx('description')}>{description}</p>
      </div>
    </a>
  );
};

export default ProjectComponent;
