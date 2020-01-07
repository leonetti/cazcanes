/* eslint-disable react/no-danger */
import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productDisplayStyles from '../styles/ProductDisplay.module.scss';

const ProductLinkFull = ({
  img, imgAlt, buyLink, slogan, notes, awards, notesImage,
}) => (
  <div>
    <figure>
      <Img
        fluid={img}
        alt={imgAlt}
        className={productDisplayStyles.image}
      />
      <figcaption>
        <p className={productDisplayStyles.slogan}>
          {slogan}
        </p>
      </figcaption>
    </figure>
    <a
      href={buyLink}
      target="_blank"
      rel="noopener noreferrer"
      className={productDisplayStyles.buy}
    >
        Buy
    </a>
    <div className={productDisplayStyles.product__info}>
      <div className={productDisplayStyles.notes__overlay}>
        <BackgroundImage
          Tag="div"
          fluid={notesImage}
          backgroundColor="#cccccc"
          preserveStackingContext
          className={productDisplayStyles.notes__imageBackground}
        >
          <section className={productDisplayStyles.notes}>
            {notes.map((note) => (
              <div key={note.title} className={productDisplayStyles.notes__item}>
                {note.icon && (
                  <FontAwesomeIcon icon={note.icon} />
                )}
                <h3 className={productDisplayStyles.notes__title}>{note.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: note.description }} />
              </div>
            ))}
          </section>
        </BackgroundImage>
      </div>
    </div>
    {awards.length > 0 && (
      <div className={productDisplayStyles.award__info}>
        <section className={productDisplayStyles.awards}>
          {awards.map((award) => (
            <div key={award.title} className={productDisplayStyles.awards__item}>
              <h3 className={productDisplayStyles.awards__title}>{award.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: award.description }} />
            </div>
          ))}
        </section>
      </div>
    )}
  </div>
);

ProductLinkFull.propTypes = {
  img: PropTypes.shape({}),
  buyLink: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  awards: PropTypes.arrayOf(PropTypes.object),
  notesImage: PropTypes.shape({}),
};

ProductLinkFull.defaultProps = {
  img: null,
  notesImage: null,
  awards: [],
};

export default ProductLinkFull;
