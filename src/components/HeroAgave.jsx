import React from 'react';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroWater = () => (
  <>
    <h2 className={heroContentStyles.title}>Cazcanes Agave</h2>
    <p className={heroContentStyles.hero__imageText}>
        Hand selected during peak sugar levels to deliver a distinct Cazcanes taste.
    </p>
    <p className={heroContentStyles.hero__imageText}>
        4,000 - 6,000 ft. elevation
    </p>
  </>
);

export default HeroWater;
