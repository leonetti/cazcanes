import React from 'react';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroWater = () => (
  <>
    <h2 className={heroContentStyles.title}>Cazcanes Water</h2>
    <p className={heroContentStyles.hero__imageText}>
        Cazcanes sources natural artesian water for our tequila.
    </p>
    <p className={heroContentStyles.hero__imageText}>
        The water starts off as rain or snow high up on the pristine peaks of the San Pedro de los
        Landeros mountains. It slowly travels through natural minerals deep within the volcanic
        mountains before emerging at the Navichi springs.
    </p>
  </>
);

export default HeroWater;
