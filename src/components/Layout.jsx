import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './navigation/Header';
import Footer from './Footer';
import '../styles/index.scss';
import layoutStyles from '../styles/Layout.module.scss';
import NewsletterBanner from './NewsletterBanner';


const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const { viewedNewsletterBanner } = global.window.localStorage;

    if (!viewedNewsletterBanner) {
      setNewsletter(true);
    }
  }, []);

  return (
    <>
      <Header sideDrawerOpen={sideDrawerOpen} setSideDrawerOpen={setSideDrawerOpen} />
      <div className={classNames({
        [layoutStyles.container]: true,
        [layoutStyles.no__scroll]: sideDrawerOpen,
      })}
      >
        <div className={layoutStyles.content}>
          {newsletter && (
          <NewsletterBanner setNewsletter={setNewsletter} />
          )}
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
