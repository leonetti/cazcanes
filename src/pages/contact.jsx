import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import SocialMediaFormContainer from '../components/SocialMediaFormContainer';
import SocialMediaSection from '../components/SocialMediaSection';
import contactStyles from '../styles/Contact.module.scss';
import Heading from '../components/Heading';
import Head from '../components/Head';

const Contact = () => {
  function encode(data) {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    global.window.fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => console.log(error));
  };

  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
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
            onSubmit={handleSubmit}
          >
            <p className={contactStyles.hidden}>
              <label>
              Don’t fill this out if you&#39;re human:
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <div className={contactStyles.form__row}>
              <label className={contactStyles.form__label} htmlFor="name">
              Name
              </label>
              <input onChange={handleChange} className={contactStyles.text__input} id="name" name="name" placeholder="John Doe" type="text" />
            </div>
            <div className={contactStyles.form__row}>
              <label className={contactStyles.form__label} htmlFor="email">
              Email *
              </label>
              <input onChange={handleChange} className={contactStyles.text__input} id="email" name="email" placeholder="email@email.com" type="email" required />
            </div>
            <div className={contactStyles.form__row}>
              <label className={contactStyles.form__label} htmlFor="phone">
              Phone Number
              </label>
              <input onChange={handleChange} className={contactStyles.text__input} id="phone" name="phone" placeholder="(818) 111 - 1111" type="text" />
            </div>
            <div className={contactStyles.form__row}>
              <label className={contactStyles.form__label} htmlFor="message">
              Message
              </label>
              <textarea onChange={handleChange} className={contactStyles.textarea} id="message" name="message" type="text" required />
            </div>
            <div className={contactStyles.form__row}>
              <label className={contactStyles.form__label} htmlFor="reason">
              Reason *
              </label>
              <select onChange={handleChange} id="reason" name="reason" className={contactStyles.select}>
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
