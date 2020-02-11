import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
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
    height: '640px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    paddingTop: 500,
    textAlign: 'center',
    flexBasis: 540,
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
    textAlign: 'justify',
  },
  title: {
    color: '#1a73e8',
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
  author: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    display: 'inline-block',
    marginRight: 10
  },
  verified: {
    marginRight: 10
  },
  posttime: {
    padding: '15px 0',
  },
  post: {
    paddingTop: 20
  },
  copyright: {
    backgroundColor: '#1a73e8',
    color: 'white',
    fontSize: 12,
  },
  singlePost: {
    [theme.breakpoints.u('md')]: {
      maxWidth: '51%',
    }

  },
}));

const PostMain = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.quote} style={{backgroundImage: `url(${props.post.picUrl})`,}}>
        <div className={classes.quoteInner}>
          {/* <Typography className={classes.quoteText} variant="h1">汪师傅:</Typography>
          <Typography className={classes.quoteText} variant="h1">看见，好时光</Typography> */}
          <div className={classes.person}>
            <Typography className={classes.name} variant="body1"><span className={classes.copyright}>&copy; Copyright 2020</span></Typography>
            <Typography className={classes.bio} variant="body2"><span className={classes.copyright}>Designed by Shawn Wang in Pudong New Area.</span></Typography>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <Grid container className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={8} className={classes.singlePost}>
            <PostHeader post={props.post} {...props}/>
          </Grid>
          <Grid item xs={12} md={8} className={classes.singlePost}>
            <PostContent post={props.post} {...props}> </PostContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

PostMain.propTypes = {
  history: PropTypes.object
};

export default PostMain;
