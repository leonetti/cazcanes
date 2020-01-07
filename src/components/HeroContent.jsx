import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import heroContentStyles from '../styles/HeroContent.module.scss';

const HeroContent = ({
  img, invert, children, fadeLeft, fadeRight, altOverlay, noOverlay, top,
}) => (
  <>
    <div className={classNames({
      [heroContentStyles.hero__imageOverlay]: true,
      [heroContentStyles.hero__inverted]: invert,
      [heroContentStyles.hero__fadeLeft]: fadeLeft,
      [heroContentStyles.hero__fadeRight]: fadeRight,
      [heroContentStyles.hero__altimageOverlay]: altOverlay,
      [heroContentStyles.hero__noOverlay]: noOverlay,
      [heroContentStyles.hero__top]: top,
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
  children: PropTypes.node,
  invert: PropTypes.bool,
  fadeLeft: PropTypes.bool,
  fadeRight: PropTypes.bool,
  altOverlay: PropTypes.bool,
  noOverlay: PropTypes.bool,
  top: PropTypes.bool,
};

HeroContent.defaultProps = {
  img: null,
  children: null,
  invert: false,
  fadeLeft: false,
  fadeRight: false,
  altOverlay: false,
  noOverlay: false,
  top: false,
};

export default HeroContent;
