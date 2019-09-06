import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import {
  Typography,
} from '@material-ui/core';

import { Verify, Tag } from '../../../../components';
import PostContent from '../PostContent';
import PostHeader from '../PostHeader';


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
    color : '#3f51b5',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color : '#3f51b5',
  },
  bio: {
    // color: theme.palette.white
    color : '#3f51b5',
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
    padding: '0 30px',
    textAlign: 'justify'
  },
  title:{
    color : '#3f51b5',
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
  posttime: {
    padding: '15px 0',
  },
  post:{
      paddingTop: 20
  }
}));

const PostHead = props => {

  const { history } = props;
  const classes = useStyles();

  const handleBack = () => {
    history.goBack();
  };


  return (
    <div className={classes.root}>
        <div className={classes.quote}>
            <div className={classes.quoteInner}>
                <Typography
                className={classes.quoteText}
                variant="h1"
                >
                汪师傅:
                </Typography>
                <Typography
                className={classes.quoteText}
                variant="h1"
                >
                看见，好时光
                </Typography>
                <div className={classes.person}>
                <Typography
                    className={classes.name}
                    variant="body1"
                >
                    &copy; Copyright 2019
                </Typography>
                <Typography
                    className={classes.bio}
                    variant="body2"
                >
                    Designed by Shawn Wang in Pudong New Area
                </Typography>
                </div>
            </div>
        </div>
        <div className={classes.content}>
            <Grid container className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8} className={classes.singlepost}>
                  <PostHeader post={props.post} {...props}></PostHeader>
              </Grid>
              <Grid item xs={12} md={8} className={classes.singlepost}>
                  <PostContent post={props.post} {...props}> </PostContent>
              </Grid>
            </Grid>
        </div>
    </div>
  );
};

PostHead.propTypes = {
  history: PropTypes.object
};

export default PostHead;
