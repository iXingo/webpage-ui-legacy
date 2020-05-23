import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  inner: {
    padding: theme.spacing(6, 3),
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto'
  },
  media: {
    '& img': {
      width: '100%',
      height: 'auto'
    }
  }
}));

const News = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.inner}>
        <Grid
          alignItems="center"
          container
          justify="space-between"
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              gutterBottom
              variant="h3"
              style={{width:214}}
            >
              东风未肯入东门，看看今天啥新闻。
            </Typography>
            <Typography variant="subtitle2">
              总有一个记忆让我们铭记于心，总有一种力量让我们泪流满面。回顾过去，一起重温那些令人动容的瞬间；展望未来，我们将走得更加铿锵有力。小人物大力量，跟着小人物汪师傅，看看他眼里的大新闻。
            </Typography>
          </Grid>
          <Grid
            className={classes.media}
            item
            lg={4}
            md={6}
            xs={12}
          >
            <img
              alt="东风未肯入东门，看看今天啥新闻。"
              src="https://img.ixingo.cn/pic/undraw_video_influencer_9oyy.svg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

News.propTypes = {
  className: PropTypes.string
};

export default News;
