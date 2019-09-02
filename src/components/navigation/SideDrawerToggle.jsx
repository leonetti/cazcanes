import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sideDrawerToggleStyles from '../../styles/SideDrawerToggle.module.scss';

const SideDrawer = ({ sideDrawerOpen, setSideDrawerOpen }) => (
  <button
    type="button"
    onClick={() => {
      setSideDrawerOpen((prevState) => !prevState);
    }}
    className={classNames({
      [sideDrawerToggleStyles.hamburger]: true,
      [sideDrawerToggleStyles.hamburger__squeeze]: true,
      [sideDrawerToggleStyles.active]: sideDrawerOpen,
    })}
  >
    <div className={sideDrawerToggleStyles.hamburger__box}>
      <div className={sideDrawerToggleStyles.hamburger__inner} />
    </div>
  </button>
);

SideDrawer.propTypes = {
  setSideDrawerOpen: PropTypes.func.isRequired,
  sideDrawerOpen: PropTypes.bool.isRequired,
};

export default SideDrawer;
