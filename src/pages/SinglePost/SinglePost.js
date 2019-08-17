import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Post from '../Post';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import {
  Typography,
} from '@material-ui/core';

import { Author, Verify, Tag } from '../../components';


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
    height: '750px',
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
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    flexGrow:1,
    margin: 'auto',
  },
  title:{
    color : '#3f51b5',
    textAlign: 'center',
    margin: '30px 0'
  },
  field: {
    width: '70%'
  },
  tags: {
      display: 'flex',
      alignItems: 'center',
  },
  author:{
      margin: '20px 0',
  }
}));

const RestPasswd = props => {

  const { history } = props;

  const classes = useStyles();

  const name = '汪欣';


  const handleBack = () => {
    history.goBack();
  };

  const tags  = [
    {
      id: 1,
      tag: '科技',
    },
    {
        id: 2,
        tag: '示例',
    },
    {
        id: 3,
        tag: '汪师傅',
    },
    {
        id: 4,
        tag: '第一个',
    },
  ];

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
            <Grid container spacing={6} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8} className={classes.singlepost}>
                <Typography
                    className={classes.title}
                    variant="h1"
                >
                这是汪师傅的一个示例文章
                </Typography>
                <Typography
                    className={classes.author}
                    variant="h5"
                >本文作者：
                <Chip
                    icon={<FaceIcon />}
                    label={name}
                    clickable
                    className={classes.chip}
                    color="primary"
                    deleteIcon={<DoneIcon />}
                    variant="outlined"
                />
                </Typography>
                
                 <Typography
                    className={classes.author}
                    paragraph
                 >作者简介：汪欣 <Verify/>，南京航空航天大学 软件工程硕士， NVIDIA中国Architect。
                 </Typography>
                
                <Divider />
              <Typography variant="h6" gutterBottom className={classes.tags}>本文标签：
                {tags.map(post => (
                     <Tag></Tag>
                ))}
              </Typography>
              <Divider />
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
			  ))} */}
			        <Post {...props}></Post>
            </Grid>
            {/* <PostContent></PostContent> */}
            </Grid>
        </div>
    </div>
  );
};

RestPasswd.propTypes = {
  history: PropTypes.object
};

export default withRouter(RestPasswd);
