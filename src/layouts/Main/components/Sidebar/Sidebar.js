import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Divider, Drawer} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImageIcon from '@material-ui/icons/Image';
import ExploreIcon from '@material-ui/icons/Explore';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';


import {Profile, SidebarNav, UpgradePlan} from './components';


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
  const {open, variant, onClose, className, ...rest} = props;

  const classes = useStyles();

  const pages = [

    {
      title: '首    页',
      href: '/index',
      icon: <EventNoteIcon/>
    },
    {
      title: '新    闻',
      href: '/news',
      icon: <FiberNewIcon/>
    },
    {
      title: '好    友',
      href: '/friends',
      icon: <PeopleIcon/>
    },
    {
      title: '计    划',
      href: '/projects',
      icon: <ImageIcon/>
    },
    {
      title: '服    务',
      href: '/products',
      icon: <DashboardIcon/>
    },
    {
      title: '技    术',
      href: '/tech',
      icon: <CodeIcon/>
    },
    {
      title: '教    程',
      href: '/courses',
      icon: <SchoolIcon/>
    },
    {
      title: '博    文',
      href: '/posts',
      icon: <MenuBookIcon/>
    },
    {
      title: '发    现',
      href: '/explore',
      icon: <ExploreIcon/>
    },
    {
      title: '关    于',
      href: '/about',
      icon: <InfoIcon/>
    },

  ];

  return (
    <Drawer
      anchor="left"
      classes={{paper: classes.drawer}}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile {...props}/>
        <Divider className={classes.divider}/>
        <SidebarNav
          className={classes.nav}
          pages={pages}
          onClose={onClose}
        />
        <UpgradePlan/>

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
