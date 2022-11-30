import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames/bind';
import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, cssTransition } from 'react-toastify';

import styles from './Contact.module.scss';

import contactImg from '~/assets/img/contact-img.svg';
import Button from '../Button';

const cx = classNames.bind(styles);

const bounce = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});

const Contact = () => {
  const form = useRef();

  const popupSuccess = () => {
    toast.success('Sending contact infomation successfully!', {
      theme: 'dark',
      transition: bounce,
      className: 'mt-36',
    });
  };

  const popupError = () => {
    toast.error('Sending contact infomation error!', {
      theme: 'dark',
      transition: bounce,
      className: 'mt-36',
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      )
      .then(
        (result) => {
          popupSuccess();
          console.log(result.text);
        },
        (error) => {
          popupError();
          console.log(error.text);
        },
      );

    e.target.reset();
  };

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
    <>
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
            <form
              ref={form}
              className={cx('contact-form')}
              onSubmit={handleSubmitForm}
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className={cx('contact-input')}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className={cx('contact-input')}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={cx('contact-input')}
                  required
                />
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone No."
                  className={cx('contact-input')}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message..."
                className={cx('contact-area')}
                required
              ></textarea>
              <Button rectangle black type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer transition={bounce} />
    </>
  );
};

export default Contact;
