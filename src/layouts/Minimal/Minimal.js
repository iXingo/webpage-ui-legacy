import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Foot, Footer, Topbar} from './components';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 56,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Minimal = props => {
  const {children} = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar/>
      <main className={classes.content}>{children}</main>
      <Foot/>
      <Footer/>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
