import React from 'react';
import Layout from '../components/Layout';
import SocialMediaFormContainer from '../components/SocialMediaFormContainer';
import SocialMediaSection from '../components/SocialMediaSection';
import contactStyles from '../styles/Contact.module.scss';
import Heading from '../components/Heading';
import Head from '../components/Head';

const Contact = () => (
  <Layout>
    <Head
      title="Contact"
    />
    <Heading
      title="Contact"
      subtitle="We are here for you"
    />
    <SocialMediaFormContainer>
      <SocialMediaSection
        title="Have questions or comments about Cazcanes tequila? Please complete the form."
      />
      <section className={contactStyles.container}>
        <form
          name="contact"
          method="post"
          action=""
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={contactStyles.form}
        >
          <p className={contactStyles.hidden}>
            <label>
              Don’t fill this out if you&#39;re human:
              <input name="bot-field" />
            </label>
          </p>
          <div className={contactStyles.form__row}>
            <label className={contactStyles.form__label} htmlFor="name">
              Name
            </label>
            <input className={contactStyles.text__input} id="name" name="name" placeholder="John Doe" type="text" />
          </div>
          <div className={contactStyles.form__row}>
            <label className={contactStyles.form__label} htmlFor="email">
              Email *
            </label>
            <input className={contactStyles.text__input} id="email" name="email" placeholder="email@email.com" type="email" required />
          </div>
          <div className={contactStyles.form__row}>
            <label className={contactStyles.form__label} htmlFor="phone">
              Phone Number
            </label>
            <input className={contactStyles.text__input} id="phone" name="phone" placeholder="(818) 111 - 1111" type="text" />
          </div>
          <div className={contactStyles.form__row}>
            <label className={contactStyles.form__label} htmlFor="message">
              Message
            </label>
            <textarea className={contactStyles.textarea} id="message" name="message" type="text" required />
          </div>
          <div className={contactStyles.form__row}>
            <label className={contactStyles.form__label} htmlFor="reason">
              Reason *
            </label>
            <select id="reason" name="reason" className={contactStyles.select}>
              <option value="retailer">Become a Retailer</option>
              <option value="media">Media / Press</option>
              <option value="apply">Apply for a Job</option>
              <option value="donation">Product Donations</option>
              <option value="general">General Information</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={contactStyles.form__row}>
            <button
              className={contactStyles.submit}
              type="submit"
            >
            Submit
            </button>
          </div>
        </form>
      </section>
    </SocialMediaFormContainer>
  </Layout>
);


export default Contact;
