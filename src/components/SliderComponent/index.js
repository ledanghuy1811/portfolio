import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderComponent.module.scss';
import SkillPercentage from '../SklillPercentage';

import percentageImage1 from '~/assets/img/meter1.svg';
import percentageImage2 from '~/assets/img/meter3.svg';

const cx = classNames.bind(styles);

const skillInfo = [
  {
    title: 'HTML',
    imageUrl: percentageImage1,
  },
  {
    title: 'CSS',
    imageUrl: percentageImage1,
  },
  {
    title: 'Javascript',
    imageUrl: percentageImage2,
  },
  {
    title: 'React JS',
    imageUrl: percentageImage2,
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // eslint-disable-next-line no-dupe-keys
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow className={cx('arrow')} />,
    prevArrow: <PrevArrow />,
    className: cx('slider'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={cx('wrapper')}>
      <Slider {...settings}>
        {skillInfo.map((info) => (
          <SkillPercentage
            key={info.title}
            title={info.title}
            imageUrl={info.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
