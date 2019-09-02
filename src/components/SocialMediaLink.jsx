import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialMediaLinkStyles from '../styles/SocialMediaLink.module.scss';

const SocialMediaLink = ({ url, icon, name }) => (
  <a className={socialMediaLinkStyles.social__link} href={url}>
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    <p>{name}</p>
  </a>
);

SocialMediaLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};

export default SocialMediaLink;
