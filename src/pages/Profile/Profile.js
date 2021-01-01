import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // height: theme.spacing(80)
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '540px'
  },
  quoteText: {
    // color: theme.palette.white,
    color: '#1a73e8',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color: '#1a73e8',
  },
  bio: {
    // color: theme.palette.white
    color: '#1a73e8',
  }
}));

const Profile = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.quote} style={{backgroundImage: `url(${props.post.picUrl})`,}}>
        <div className={classes.quoteInner}>
          <Typography className={classes.quoteText} variant="h1">汪师傅:</Typography>
          <Typography className={classes.quoteText} variant="h1">看见，好时光</Typography>
          <div className={classes.person}>
            <Typography className={classes.name} variant="body1">&copy; Copyright 2021</Typography>
            <Typography className={classes.bio} variant="body2">Designed by Shawn Wang in Pudong New Area</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  history: PropTypes.object
};

export default Profile;
