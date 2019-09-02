import React from 'react';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroFermentation = () => (
  <>
    <h2 className={heroContentStyles.title}>Natural Yeast Fermentation</h2>
    <p className={heroContentStyles.hero__imageText}>
      The &lsquo;pi&ntilde;as&rsquo; are then cooked, rolled, and squeezed by hand to extract and
      concentrate their
      flavors. Next comes fermentation using natural, wild yeast, and then distillation in our
      alembic stills.
    </p>
  </>
);

export default HeroFermentation;
