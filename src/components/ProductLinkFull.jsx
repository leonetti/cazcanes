import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import productLinkFullStyles from '../styles/ProductLinkFull.module.scss';

const ProductLinkFull = ({
  img, title, slug, alt, slogan,
}) => (
  <>
    <div className={productLinkFullStyles.full__view}>
      <article className={productLinkFullStyles.wrapper}>
        <figure className={productLinkFullStyles.container}>
          <Img
            fluid={img}
            alt={alt}
            className={productLinkFullStyles.product__image}
          />
          <figcaption className={productLinkFullStyles.product__content}>
            <h2 className={productLinkFullStyles.title}>{title}</h2>
            <h3 className={productLinkFullStyles.slogan}>{slogan}</h3>
            <Link
              to={slug}
              className={productLinkFullStyles.product__link}
            >
          Learn More
            </Link>
          </figcaption>
        </figure>
      </article>
    </div>

    <Link to={slug} className={productLinkFullStyles.responsive__link}>
      <article className={productLinkFullStyles.wrapper}>
        <figure className={productLinkFullStyles.container}>
          <Img
            fluid={img}
            alt={alt}
            className={productLinkFullStyles.product__image}
          />
          <figcaption className={productLinkFullStyles.product__content}>
            <h2 className={productLinkFullStyles.title}>{title}</h2>
            <h3 className={productLinkFullStyles.slogan}>{slogan}</h3>
            <p className={productLinkFullStyles.product__link}>View More</p>
          </figcaption>
        </figure>
      </article>
    </Link>
  </>
);

ProductLinkFull.propTypes = {
  img: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
};

ProductLinkFull.defaultProps = {
  img: null,
};

export default ProductLinkFull;
