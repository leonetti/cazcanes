import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroContent = ({
  img, invert, children, fadeLeft, fadeRight, altOverlay,
}) => (
  <>
    <div className={classNames({
      [heroContentStyles.hero__imageOverlay]: true,
      [heroContentStyles.hero__inverted]: invert,
      [heroContentStyles.hero__fadeLeft]: fadeLeft,
      [heroContentStyles.hero__fadeRight]: fadeRight,
      [heroContentStyles.hero__altimageOverlay]: altOverlay,
    })}
    >
      <BackgroundImage
        Tag="div"
        fluid={img}
        backgroundColor="#cccccc"
        preserveStackingContext
        className={heroContentStyles.hero__imageBackground}
      >
        <div
          className={heroContentStyles.hero__contentInline}
        >
          {children}
        </div>
      </BackgroundImage>
    </div>
    <div
      className={heroContentStyles.hero__contentOuter}
    >
      {children}
    </div>
  </>
);

HeroContent.propTypes = {
  img: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  fadeLeft: PropTypes.bool,
  fadeRight: PropTypes.bool,
  altOverlay: PropTypes.bool,
};

HeroContent.defaultProps = {
  img: null,
  invert: false,
  fadeLeft: false,
  fadeRight: false,
  altOverlay: false,
};

export default HeroContent;
