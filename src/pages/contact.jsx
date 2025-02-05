import React, { useState } from 'react';
import Layout from '../components/Layout';
import SocialMediaFormContainer from '../components/SocialMediaFormContainer';
import SocialMediaSection from '../components/SocialMediaSection';
import contactStyles from '../styles/Contact.module.scss';
import Heading from '../components/Heading';
import Head from '../components/Head';

const Contact = () => {
  const [phoneFormatted, setPhoneFormatted] = useState('');
  const phoneMask = ({ target }) => {
    const num = target.value.replace(/\D/g, '');
    if (target.value.length < 3) {
      setPhoneFormatted(num);
    } else if (target.value.length < 10) {
      setPhoneFormatted(`(${num.substring(0, 3)}) ${num.substring(3, 6)}`);
    } else {
      setPhoneFormatted(`(${num.substring(0, 3)}) ${num.substring(3, 6)}-${num.substring(6, 10)}`);
    }
  };

  return (
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
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className={contactStyles.form}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className={contactStyles.hidden}>
              <label>
              Don’t fill this out if you&#39;re human:
                <input type="hidden" name="bot-field" />
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
              <input value={phoneFormatted} onChange={phoneMask} className={contactStyles.text__input} id="phone" name="phone" placeholder="(818) 111 - 1111" type="tel" />
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
};


export default Contact;
