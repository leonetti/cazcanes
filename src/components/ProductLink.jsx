import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import productLinkStyles from '../styles/ProductLink.module.scss';

const ProductLink = ({
  img, title, slug, alt,
}) => (
  <>
    <Link
      to={slug}
      className={productLinkStyles.product__link}
    >
      <figure className={productLinkStyles.product__image}>
        <Img
          fluid={img}
          alt={alt}
        />
        <figcaption className={productLinkStyles.product__title}>{title}</figcaption>
      </figure>
    </Link>
  </>
);

ProductLink.propTypes = {
  img: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

ProductLink.defaultProps = {
  img: null,
};

export default ProductLink;
