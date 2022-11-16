import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  href = false,
  primary = false,
  circle = false,
  rectangle = false,
  small = false,
  large = false,
  className,
  children,
  ...passProps
}) => {
  let Comp = 'button';
  const props = {...passProps}
  if (href) {
    Comp = 'a';
    props.href = href;
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    circle,
    rectangle,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
};

export default Button;
