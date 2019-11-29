import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import {
  faTwitter, faFacebook, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import SocialMediaLink from './SocialMediaLink';
import socialMediaSectionStyles from '../styles/SocialMediaSection.module.scss';


const SocialMediaSection = ({ title }) => {
  const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      telephone
      facebook
      twitter
      instagram
    }
  }
}
`);
  return (
    <section className={socialMediaSectionStyles.container}>
      <div className={socialMediaSectionStyles.info}>
        <h3 className={socialMediaSectionStyles.title}>
          {title}
        </h3>
        <div className={socialMediaSectionStyles.social}>
          <SocialMediaLink
            url={`tel:${data.site.siteMetadata.telephone}`}
            icon={faPhone}
            name={data.site.siteMetadata.telephone}
          />
          <SocialMediaLink
            url={data.site.siteMetadata.facebook}
            icon={faFacebook}
            name="facebook"
            target="_blank"
          />
          <SocialMediaLink
            url={data.site.siteMetadata.twitter}
            icon={faTwitter}
            name="twitter"
            target="_blank"
          />
          <SocialMediaLink
            url={data.site.siteMetadata.instagram}
            icon={faInstagram}
            name="instagram"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
};

SocialMediaSection.propTypes = {
  title: PropTypes.string,
};

SocialMediaSection.defaultProps = {
  title: null,
};

export default SocialMediaSection;
