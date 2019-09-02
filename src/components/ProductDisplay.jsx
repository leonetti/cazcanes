import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import productDisplayStyles from '../styles/ProductDisplay.module.scss';

const ProductLinkFull = ({ img }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        liquoramaBlanco
      }
    }
  }
  `);

  return (
    <div>
      <figure>
        <Img
          fluid={img}
          alt="blanco tequila"
          className={productDisplayStyles.image}
        />
        <figcaption>
          <p className={productDisplayStyles.slogan}>
          Fresh out of the still and into a hand-made glass bottle. No aging.
          </p>
        </figcaption>
      </figure>
      <a
        href={data.site.siteMetadata.liquoramaBlanco}
        target="_blank"
        rel="noopener noreferrer"
        className={productDisplayStyles.buy}
      >
        Buy
      </a>
      <div className={productDisplayStyles.product__info}>
        <section className={productDisplayStyles.notes}>
          <div className={productDisplayStyles.notes__item}>
            <h3 className={productDisplayStyles.notes__title}>Color</h3>
            <p>Crystal Clear</p>
          </div>
          <div className={productDisplayStyles.notes__item}>
            <h3 className={productDisplayStyles.notes__title}>Nose</h3>
            <p>Floral, Sweet, Citrus, &amp; Candy Cane</p>
          </div>
          <div className={productDisplayStyles.notes__item}>
            <h3 className={productDisplayStyles.notes__title}>Taste</h3>
            <p>Clean, Dry, &amp; Smooth</p>
          </div>
          <div className={productDisplayStyles.notes__item}>
            <h3 className={productDisplayStyles.notes__title}>Finish</h3>
            <p>Floral &amp; Black Pepper Corn</p>
          </div>
        </section>
        <section className={productDisplayStyles.awards}>
          <div className={productDisplayStyles.award}>
            <h3>
              <span className={productDisplayStyles.award__title}>2017 double gold</span>
            San Francisco World Spirits Competition
            </h3>
            <h3>
              <span className={productDisplayStyles.award__title}>2018 double gold</span>
            San Francisco World Spirits Competition
            </h3>
            <h3>
              <span className={productDisplayStyles.award__title}>2018 best tequila</span>
            San Francisco World Spirits Competition
            </h3>
            <h3>
              <span className={productDisplayStyles.award__title}>
                2018 best unaged wine spirit
              </span>
            San Francisco World Spirits Competition
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

ProductLinkFull.propTypes = {
  img: PropTypes.shape({}),
};

ProductLinkFull.defaultProps = {
  img: null,
};

export default ProductLinkFull;
