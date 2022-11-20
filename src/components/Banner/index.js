import React from 'react'
import classNames from 'classnames/bind'

import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

const Banner = () => {
  return (
    <div className={cx('wrapper')} style={{ height: 1000}}></div>
  )
}

export default Banner