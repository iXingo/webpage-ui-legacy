import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar,  Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: '0 2px 6px 0 rgba(å0,0,0,.12), inset 0 -1px 0 0 #dadce0',
    backgroundColor: '#1a73e8'
  },
  flexGrow: {
    flexGrow: 1
  },
  logo: {
    height: 36,
    width: 120
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, handleLogout, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo.png"
            className={classes.logo}
          />
        </RouterLink>测试版 Beta 测试版 Beta 2019.12.05.0.1
        <div className={classes.flexGrow} />
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
