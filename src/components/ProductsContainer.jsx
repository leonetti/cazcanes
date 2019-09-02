import React from 'react';
import PropTypes from 'prop-types';
import productsContainerStyles from '../styles/ProductsContainer.module.scss';

const ProductsContainer = ({ children }) => (
  <div className={productsContainerStyles.products__container}>
    {children}
  </div>
);

ProductsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContainer;
