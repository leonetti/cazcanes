import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroTrue = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
  return (
    <>
      <blockquote className={heroContentStyles.quote}>
          True to Earth, True to Flavor
        <cite>{data.site.siteMetadata.title}</cite>
      </blockquote>
      <p className={heroContentStyles.hero__altimageText}>
        In our minds producing tequila is an art form, one we take very seriously. With
        Cazcanes, you won&#39;t find large scale, corporate distilleries. What you will find
        is a boutique-style
        distillery that operates in harmony with the land, environment, and natural spring that
        preserves it.
      </p>
      <p className={heroContentStyles.hero__altimageText}>
        Nestled in the region of Tequila Mexico, we hand select each 100% Weber Blue Agave for
        harvest. Our attention to detail continues through every step of our small-batch process,
        until finally bestowing our tequila to the sanctum of a custom-made bottle.
      </p>
      <p className={heroContentStyles.hero__altimageText}>
        Cazcanes Tequila. A story to celebrate, an authentic taste to behold.
      </p>
    </>
  );
};

export default HeroTrue;
