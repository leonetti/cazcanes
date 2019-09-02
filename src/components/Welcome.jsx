
import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import welcomeStyles from '../styles/Welcome.module.scss';

const Welcome = ({ img, alt }) => (
  <section className={welcomeStyles.container}>
    <div>
      <h3 className={welcomeStyles.subtitle}>Introducing</h3>
      <h1 className={welcomeStyles.title}>Cazcanes Tequila</h1>
      <h4 className={welcomeStyles.slogan}>The Smoothest 100 Proof Tequila in the World!</h4>
    </div>
    <Img
      fluid={img}
      alt={alt}
      className={welcomeStyles.bottles}
    />
  </section>
);

Welcome.propTypes = {
  img: PropTypes.shape({}),
  alt: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  img: null,
};

export default Welcome;
