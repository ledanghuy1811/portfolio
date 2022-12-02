import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Project.module.scss';
import HeaderContent from '../HeaderContent';
import ProjectComponent from '../ProjectComponent';

import theBandImg from '~/assets/img/project_img/the_band.png';
import f8ShopImg from '~/assets/img/project_img/f8_shop.png';
import musicAppImg from '~/assets/img/project_img/music_app.png';
import todoAppImg from '~/assets/img/project_img/todo_app.png';
import gymAppImg from '~/assets/img/project_img/gym_app.png';
import dashboardImg from '~/assets/img/project_img/dashboard.png';
import tiktokImg from '~/assets/img/project_img/tiktok_clone.png';
import portfolioImg from '~/assets/img/project_img/portfolio.png';

const cx = classNames.bind(styles);

const listTabs = [
  {
    name: 'HTML/CSS',
    active: true,
    content: [
      {
        title: 'The Band',
        description: 'The band is my first project',
        imageUrl: theBandImg,
        linkUrl: 'https://ledanghuy1811.github.io/The_band_ver1_1/',
      },
      {
        title: 'F8 Shop',
        description: 'Responsive web with grid',
        imageUrl: f8ShopImg,
        linkUrl: 'https://ledanghuy1811.github.io/F8_shop/',
      },
    ],
  },
  {
    name: 'Javascript',
    active: false,
    content: [
      {
        title: 'The Band',
        description: 'The band is my first project',
        imageUrl: theBandImg,
        linkUrl: 'https://ledanghuy1811.github.io/The_band_ver1_1/',
      },
      {
        title: 'F8 Shop',
        description: 'Responsive web with grid',
        imageUrl: f8ShopImg,
        linkUrl: 'https://ledanghuy1811.github.io/F8_shop/',
      },
      {
        title: 'Music App',
        description: 'App to play music',
        imageUrl: musicAppImg,
        linkUrl: 'https://ledanghuy1811.github.io/music_app/',
      },
      {
        title: 'Todo App',
        description: 'Small todo app',
        imageUrl: todoAppImg,
        linkUrl: 'https://ledanghuy1811.github.io/todo_app/',
      },
    ],
  },
  {
    name: 'React JS',
    active: false,
    content: [
      {
        title: 'Gym App',
        description: 'Small gym website',
        imageUrl: gymAppImg,
        linkUrl: 'https://github.com/ledanghuy1811/gym-app',
      },
      {
        title: 'Dashboard Admin',
        description: 'Dashboard admin UI',
        imageUrl: dashboardImg,
        linkUrl: 'https://github.com/ledanghuy1811/dashboard_admin.git',
      },
      {
        title: 'Tiktok Clone',
        description: 'Clone tiktok app',
        imageUrl: tiktokImg,
        linkUrl: 'https://github.com/ledanghuy1811/tiktok-clone',
      },
      {
        title: 'Portfolio',
        description: 'My portfolio',
        imageUrl: portfolioImg,
        linkUrl: 'https://github.com/ledanghuy1811/portfolio',
      },
    ],
  },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState(listTabs);

  const handleActiveTab = (e) => {
    setActiveTab((prev) => {
      for (let tab of prev) {
        if (tab.name === e.target.innerHTML) tab.active = true;
        else tab.active = false;
      }

      return [...prev];
    });
  };

  return (
    <div id="project" className={cx('wrapper')}>
      <div className={cx('container')}>
        <HeaderContent
          title="Projects"
          description="Here is some projects that I have done while studying. I start fisrt with 
          simple HTML and CSS projects. Then I responsive my projects and go on with javascript
          and finnaly doing projects with React JS!"
        />
        <div className={cx('content')}>
          <div className={cx('list', 'grid grid-cols-3')}>
            {activeTab.map((tab) => (
              <div
                key={tab.name}
                className={cx('list-item', {
                  'tab-active': tab.active,
                })}
                onClick={handleActiveTab}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className={cx('tab', 'grid sm:grid-cols-2 lg:grid-cols-3 gap-10')}>
            {activeTab.map((tab) =>
              tab.active
                ? tab.content.map((item) => (
                    <ProjectComponent
                      key={item.title}
                      href={item.linkUrl}
                      imgSrc={item.imageUrl}
                      title={item.title}
                      description={item.description}
                    />
                  ))
                : '',
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
