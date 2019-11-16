import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImageIcon from '@material-ui/icons/Image';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import EventNoteIcon from '@material-ui/icons/EventNote';

import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    
    {
      title: '首    页',
      href: '/index',
      icon: <EventNoteIcon />
    },
    {
      title: '好    友',
      href: '/friends',
      icon: <PeopleIcon />
    },
    {
      title: '计    划',
      href: '/projects',
      icon: <ImageIcon />
    },
    {
      title: '服    务',
      href: '/products',
      icon: <DashboardIcon />
    },
    {
      title: '发    现',
      href: '/users',
      icon: <ExploreIcon />
    },
    // {
    //   title: '登    录',
    //   href: '/sign-in',
    //   icon: <AccountBoxIcon />
    // },
    // {
    //   title: '注    册',
    //   href: '/sign-up',
    //   icon: <LockOpenIcon />
    // },
    {
      title: '关    于',
      href: '/about',
      icon: <InfoIcon />
    },
    {
      title: '设    置',
      href: '/settings',
      icon: <SettingsIcon />
    },
    
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />

      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
