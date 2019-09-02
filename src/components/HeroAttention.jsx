import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroFermentation = () => {
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
      <h2 className={heroContentStyles.title}>Attention to Detail</h2>
      <p className={heroContentStyles.hero__imageText}>
        {`At ${data.site.siteMetadata.title}, we oversee every step of the process with tremendous Attention
        to detail to help create a tequila that stands above all the rest.`}
      </p>
    </>
  );
};

export default HeroFermentation;
