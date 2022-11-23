import React from 'react'
import classNames from 'classnames/bind'

import styles from './HeaderContent.module.scss'

const cx = classNames.bind(styles)

const HeaderContent = ({ title, description }) => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <h1 className={cx('title')}>{title}</h1>
            <p className={cx('description')}>{description}</p>
        </div>
    </div>
  )
}

export default HeaderContent