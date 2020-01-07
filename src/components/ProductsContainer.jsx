import React from 'react';
import PropTypes from 'prop-types';
import productsContainerStyles from '../styles/ProductsContainer.module.scss';

const ProductsContainer = ({ children }) => (
  <div className={productsContainerStyles.products__container}>
    <div className={productsContainerStyles.text__container}>
      <p>
        <span className={productsContainerStyles.title}>Our Name: </span>
        The Cazcanes Indians, the only indiginous people of Mexico never conquered by the Spaniards.
      </p>
      <p>
        <span className={productsContainerStyles.title}>Our Symbol: </span>
        The Ancient Indian symbol of the Healing Hand.
      </p>
      <p>
        <span className={productsContainerStyles.title}>Our Recipe: </span>
        Based upon the original 300 year old Indian recipe used when tequila was first made.
      </p>
      <p>
        <span className={productsContainerStyles.title}>Our Water: </span>
        Deep underground wells beneath the ancient tribal lands of the Cazcanes.
      </p>
      <p className={productsContainerStyles.last__item}>
        <span className={productsContainerStyles.title}>Our Ingredients: </span>
        Agave, Water.
      </p>
    </div>
    {children}
  </div>
);

ProductsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContainer;
