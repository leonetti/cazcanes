import React from 'react';
import {
  useStaticQuery, graphql, Link,
} from 'gatsby';
import footerStyles from '../styles/Footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        company
        facebook
        twitter
        instagram
      }
    }
  }
`);
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.copyright}>{`${data.site.siteMetadata.company}, Copyright © 2019`}</p>
      <Link className={footerStyles.newsletter} to="/newsletter/">Subscribe to newsletter</Link>
      <div>
        <a className={footerStyles.social} href={data.site.siteMetadata.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        <span>•</span>
        <a className={footerStyles.social} href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        <span>•</span>
        <a className={footerStyles.social} href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
