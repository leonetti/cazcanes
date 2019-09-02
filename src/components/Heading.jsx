import React from 'react';
import PropTypes from 'prop-types';
import headingStyles from '../styles/Heading.module.scss';

const Heading = ({
  title, subtitle, pretitle, children,
}) => (
  <div className={headingStyles.wrapper}>
    {pretitle && (
      <h1 className={headingStyles.pretitle}>{pretitle}</h1>
    )}
    <h1 className={headingStyles.title}>{title}</h1>
    {subtitle && (
      <h2 className={headingStyles.subtitle}>{subtitle}</h2>
    )}
    {children}
  </div>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  pretitle: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  subtitle: null,
  pretitle: null,
  children: null,
};

export default Heading;
