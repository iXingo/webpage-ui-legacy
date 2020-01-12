import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
// import Grid from '@material-ui/core/Grid';
import {MediaSection} from '../../components';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // height: theme.spacing(80)
  },
  grid: {
    height: '100%'
  },

  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: '#1a73e8',

  },
  contentGrid: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify',
    backgroundColor: 'paimary',
  },
  friendtime: {
    padding: '15px 0',
  },
  friend: {
    paddingTop: 20
  },
}));

const About = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MediaSection friend={props.friend} {...props}/>
    </div>
  );
};

About.propTypes = {
  history: PropTypes.object
};

export default About;
  