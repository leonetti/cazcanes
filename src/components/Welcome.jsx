
import React from 'react';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import welcomeStyles from '../styles/Welcome.module.scss';

const Welcome = ({ img, alt, logo }) => (
  <section className={welcomeStyles.container}>
    <BackgroundImage
      Tag="div"
      fluid={img}
      backgroundColor="#cccccc"
      preserveStackingContext
      className={welcomeStyles.image}
    >
      <div>
        <Img
          fluid={logo}
          alt={alt}
          className={welcomeStyles.logo}
        />
        <p className={welcomeStyles.slogan}>The Lost Art of Making Tequila</p>
      </div>
    </BackgroundImage>
    {/* <div>
      <h3 className={welcomeStyles.subtitle}>Introducing</h3>
      <h1 className={welcomeStyles.title}>Cazcanes Tequila</h1>
      <h4 className={welcomeStyles.slogan}>The Smoothest 100 Proof Tequila in the World!</h4>
    </div>
    <Img
      fluid={img}
      alt={alt}
      className={welcomeStyles.bottles}
    /> */}
  </section>
);

Welcome.propTypes = {
  img: PropTypes.shape({}),
  alt: PropTypes.string.isRequired,
  logo: PropTypes.shape({}),
};

Welcome.defaultProps = {
  img: null,
  logo: null,
};

export default Welcome;
