import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import toolbarStyles from '../../styles/Toolbar.module.scss';

const Toolbar = ({ title, setSideDrawerOpen }) => (
  <nav className={toolbarStyles.nav__container}>
    <ul className={toolbarStyles.nav__list}>
      <li>
        <Link className={toolbarStyles.title} to="/" onClick={() => setSideDrawerOpen(false)}>{title}</Link>
      </li>
      <li>
        <Link className={toolbarStyles.nav__link} to="/products/" activeClassName={toolbarStyles.nav__linkActive}>Products</Link>
      </li>
      <li>
        <Link className={toolbarStyles.nav__link} to="/about/" activeClassName={toolbarStyles.nav__linkActive}>About</Link>
      </li>
      <li>
        <Link className={toolbarStyles.nav__link} to="/blog/" activeClassName={toolbarStyles.nav__linkActive}>Blog</Link>
      </li>
      <li>
        <Link className={toolbarStyles.nav__link} to="/buy/" activeClassName={toolbarStyles.nav__linkActive}>Buy</Link>
      </li>
      <li>
        <Link className={toolbarStyles.nav__link} to="/contact/" activeClassName={toolbarStyles.nav__linkActive}>Contact</Link>
      </li>
    </ul>
  </nav>
);

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  setSideDrawerOpen: PropTypes.func.isRequired,
};

export default Toolbar;
