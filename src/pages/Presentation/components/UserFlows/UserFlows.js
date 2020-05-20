import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
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

const UserFlows = props => {
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
              皎皎空中孤月轮，汪欣教你学编程。
            </Typography>
            <Typography variant="subtitle2">
              借助计算机程序，我们能够轻松完成一些有趣的事情，但是有的时候计算机程序的编写和学习却不轻松。在这里，汪师傅将和你一起，尝试将这一切变的稍微轻松一些。
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
              alt="皎皎空中孤月轮，汪欣教你学编程。"
              src="https://img.ixingo.cn/pic/undraw_pair_programming_njlp.svg"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

UserFlows.propTypes = {
  className: PropTypes.string
};

export default UserFlows;
