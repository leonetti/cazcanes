import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import newsletterBannerStyles from '../styles/NewsletterBanner.module.scss';

const NewsletterBanner = ({ setNewsletter }) => (
  <div className={newsletterBannerStyles.container}>
    <button
      onClick={() => {
        global.window.localStorage.setItem('viewedNewsletterBanner', 'true');
        setNewsletter(false);
      }}
      type="button"
      className={newsletterBannerStyles.close}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
    <h3 className={newsletterBannerStyles.title}>Sign up for the newsletter.</h3>
    <p className={newsletterBannerStyles.description}>
      Be the first to hear about the latest product releases, collaborations, and online
      exclusives. Join the
      <span className={newsletterBannerStyles.company}> Cazcanes </span>
      email list.
    </p>
    <form
      name="newsletter"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={newsletterBannerStyles.form}
      onSubmit={() => {
        global.window.localStorage.setItem('viewedNewsletterBanner', 'true');
      }}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className={newsletterBannerStyles.hidden}>
        <label>
              Don’t fill this out if you&#39;re human:
          <input type="hidden" name="bot-field" />
        </label>
      </p>
      <input className={newsletterBannerStyles.email} name="email" placeholder="email@email.com" type="email" required />
      <button
        className={newsletterBannerStyles.submit}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  </div>
);

NewsletterBanner.propTypes = {
  setNewsletter: PropTypes.func.isRequired,
};

export default NewsletterBanner;
