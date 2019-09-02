import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { graphql, useStaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import SideDrawerToggle from './SideDrawerToggle';
import SideDrawer from './SideDrawer';
import headerStyles from '../../styles/Header.module.scss';
import toolbarStyles from '../../styles/Toolbar.module.scss';

const Header = ({ sideDrawerOpen, setSideDrawerOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [headerScrolled, setHeaderScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = global.window.scrollY
      || global.window.pageYOffset
      || (global.document.documentElement
      || global.document.body.parentNode
      || global.document.body).scrollTop;

    if (scrollTop >= 24) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    global.window.addEventListener('scroll', handleScroll);

    return () => {
      global.window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={classNames({
        [headerStyles.header]: true,
        [headerStyles.headerScrolled]: headerScrolled,
      })}
      >
        <SideDrawerToggle sideDrawerOpen={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
        <Toolbar setSideDrawerOpen={setSideDrawerOpen} title={data.site.siteMetadata.title} />
        {!sideDrawerOpen && (
          <Link
            className={classNames({
              [toolbarStyles.nav__link]: true,
              [toolbarStyles.nav__linkShow]: true,
              [toolbarStyles.nav__linkHidden]: sideDrawerOpen,
            })}
            to="/products"
            activeClassName={toolbarStyles.nav__linkActive}
          >
            Products
          </Link>
        )}
      </header>
      <SideDrawer sideDrawerOpen={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
    </>
  );
};

Header.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  setSideDrawerOpen: PropTypes.func.isRequired,
};


export default Header;
