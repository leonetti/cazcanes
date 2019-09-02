import React from 'react';
import PropTypes from 'prop-types';
import socialMediaFormContainerStyles from '../styles/SocialMediaFormContainer.module.scss';

const SocialMediaFormContainer = ({ children }) => (
  <div className={socialMediaFormContainerStyles.wrapper}>
    {children}
  </div>
);

SocialMediaFormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocialMediaFormContainer;
