import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import toolbarStyles from '../../styles/Toolbar.module.scss';

const Toolbar = ({ title, setSideDrawerOpen }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        liquoramaCazcanes
      }
    }
  }
  `);
  return (
    <nav className={toolbarStyles.nav__container}>
      <ul className={toolbarStyles.nav__list}>
        <li>
          <Link className={toolbarStyles.title} to="/" onClick={() => setSideDrawerOpen(false)}>{title}</Link>
        </li>
        <li>
          <Link className={toolbarStyles.nav__link} to="/products/" activeClassName={toolbarStyles.nav__linkActive}>Products</Link>
        </li>
        <li>
          <a className={toolbarStyles.nav__link} target="_blank" rel="noopener noreferrer" href={data.site.siteMetadata.liquoramaCazcanes}>Buy</a>
        </li>
        <li>
          <Link className={toolbarStyles.nav__link} to="/contact/" activeClassName={toolbarStyles.nav__linkActive}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  setSideDrawerOpen: PropTypes.func.isRequired,
};

export default Toolbar;
