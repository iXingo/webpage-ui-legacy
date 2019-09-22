import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import FriendContent from '../FriendContent';
import FriendHeader from '../FriendHeader';


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
    color : '#1a73e8',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color : '#1a73e8',
  },
  bio: {
    // color: theme.palette.white
    color : '#1a73e8',
  },
  contentContainer: {},
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  mainGrid: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    // flexGrow:1,
    // margin: 'auto',
    // padding: theme.spacing(3),
    padding: '0 16px',
    textAlign: 'justify'
  },
  title:{
    color : '#1a73e8',
    textAlign: 'center',
    margin: '30px 0'
  },
  field: {
    width: '70%'
  },
  abstrat: {
    margin: '20px 0',
  },
  tags: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  author:{
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  avatar : {
      display: 'inline-block',
      marginRight: 10
  },
  verified:{
      marginRight: 10
  },
  friendtime: {
    padding: '15px 0',
  },
  friend:{
      paddingTop: 20
  }
}));

const FriendMain = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8} className={classes.singlefriend}>
            <FriendHeader friend={props.friend} {...props}></FriendHeader>
          </Grid>
          <Grid item xs={12} md={8} className={classes.singlefriend}>
            <FriendContent friend={props.friend} {...props}></FriendContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

FriendMain.propTypes = {
  history: PropTypes.object
};

export default FriendMain;
