import React from 'react';
import Layout from '../components/Layout';
import SocialMediaFormContainer from '../components/SocialMediaFormContainer';
import contactStyles from '../styles/Contact.module.scss';
import Heading from '../components/Heading';
import Head from '../components/Head';

const Newsletter = () => (
  <Layout>
    <Head
      title="Newsletter"
    />
    <Heading
      title="Newsletter"
      subtitle="Sign up today"
    />
    <SocialMediaFormContainer>
      <section className={contactStyles.container}>
        <h3 className={contactStyles.title}>Sign up for the newsletter.</h3>
        <p className={contactStyles.description}>
      Be the first to hear about the latest product releases, collaborations, and online
      exclusives. Join the
          <span className={contactStyles.company}> Cazcanes </span>
      email list.
        </p>
        <form
          name="newsletter"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={contactStyles.form}
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p className={contactStyles.hidden}>
            <label>
              Don’t fill this out if you&#39;re human:
              <input type="hidden" name="bot-field" />
            </label>
          </p>
          <div className={contactStyles.form__row}>
            <input className={contactStyles.text__input} name="email" placeholder="name@name.com" type="email" required />
            <button
              className={contactStyles.submit}
              type="submit"
            >
            Sign Up
            </button>
          </div>
        </form>
      </section>
    </SocialMediaFormContainer>
  </Layout>
);


export default Newsletter;
