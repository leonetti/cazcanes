import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import sideDrawerStyles from '../../styles/SideDrawer.module.scss';

const SideDrawer = ({ sideDrawerOpen, setSideDrawerOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          facebook
          twitter
          instagram
        }
      }
    }
  `);

  return (
    <nav
      className={classNames({
        [sideDrawerStyles.nav__container]: true,
        [sideDrawerStyles.open]: sideDrawerOpen,
      })}
    >
      <div className={sideDrawerStyles.scrollable__container}>
        <ul className={sideDrawerStyles.nav__list}>
          <li>
            <Link tabIndex={sideDrawerOpen ? '0' : '-1'} onClick={() => setSideDrawerOpen(false)} className={sideDrawerStyles.nav__link} to="/products/" activeClassName={sideDrawerStyles.nav__linkActive}>Products</Link>
          </li>
          <li>
            <Link tabIndex={sideDrawerOpen ? '0' : '-1'} onClick={() => setSideDrawerOpen(false)} className={sideDrawerStyles.nav__link} to="/about/" activeClassName={sideDrawerStyles.nav__linkActive}>About</Link>
          </li>
          <li>
            <Link tabIndex={sideDrawerOpen ? '0' : '-1'} onClick={() => setSideDrawerOpen(false)} className={sideDrawerStyles.nav__link} to="/buy/" activeClassName={sideDrawerStyles.nav__linkActive}>Buy</Link>
          </li>
          <li>
            <Link tabIndex={sideDrawerOpen ? '0' : '-1'} onClick={() => setSideDrawerOpen(false)} className={sideDrawerStyles.nav__link} to="/contact/" activeClassName={sideDrawerStyles.nav__linkActive}>Contact</Link>
          </li>
        </ul>
        <hr className={sideDrawerStyles.hr} />
        <ul className={sideDrawerStyles.nav__list}>
          <li>
            <Link tabIndex={sideDrawerOpen ? '0' : '-1'} onClick={() => setSideDrawerOpen(false)} className={sideDrawerStyles.nav__link} to="/newsletter/" activeClassName={sideDrawerStyles.nav__linkActive}>Newsletter</Link>
          </li>
          <li>
            <a tabIndex={sideDrawerOpen ? '0' : '-1'} className={sideDrawerStyles.nav__link} href={data.site.siteMetadata.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a tabIndex={sideDrawerOpen ? '0' : '-1'} className={sideDrawerStyles.nav__link} href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a tabIndex={sideDrawerOpen ? '0' : '-1'} className={sideDrawerStyles.nav__link} href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

SideDrawer.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  setSideDrawerOpen: PropTypes.func.isRequired,
};

export default SideDrawer;
