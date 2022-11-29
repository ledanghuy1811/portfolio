import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

import contactImg from '~/assets/img/contact-img.svg';
import Button from '../Button';

const cx = classNames.bind(styles);

const Contact = () => {
  useEffect(() => {
    const handlescroll = () => {
      const contactImg = document.getElementById('contact-img');

      if (
        window.scrollY > contactImg.offsetTop - 700 &&
        window.scrollY < contactImg.offsetTop + 700
      ) {
        contactImg.classList.add(cx('active'));
      } else {
        contactImg.classList.remove(cx('active'));
      }
    };
    window.addEventListener('scroll', handlescroll);

    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  return (
    <div id="contact" className={cx('wrapper')}>
      <div className={cx('container', 'grid sm:grid-cols-2 gap-12')}>
        <img
          src={contactImg}
          alt="Contact Img"
          id="contact-img"
          className={cx('contact-img')}
        />
        <div className={cx('form-area')}>
          <h1 className={cx('contact-title')}>Get In Touch</h1>
          <form action="" className={cx('contact-form')}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className={cx('contact-input')}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={cx('contact-input')}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className={cx('contact-input')}
              />
              <input
                type="text"
                placeholder="Phone No."
                className={cx('contact-input')}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message..."
              className={cx('contact-area')}
            ></textarea>
            <Button rectangle black type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
