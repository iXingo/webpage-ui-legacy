import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button, Grid, Link, Typography} from '@material-ui/core';
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: 100,
    textAlign: 'center',
    marginTop: 72,
    marginBottom: 72
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    height: 300
  }
}));

const ActivatePage = props => {
  const classes = useStyles();
  if (props.info.code === -1) {
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">加载中。。。</Typography>

            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  if (props.info.code === 200) {
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">用户激活成功！</Typography>
              <Typography variant="subtitle2">根据提示， 即可畅游星狗网。</Typography>
              <Typography variant="subtitle2">{props.info.message}</Typography>
              <Link
                component={RouterLink}
                to={props.info.data}
                variant="h6"
              >
                点击这里继续 →
              </Link>
              <img alt="Under development" className={classes.image}
                   src="https://img.ixingo.cn/undraw_chore_list_iof3.svg"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">用户激活失败！</Typography>
              <Typography variant="subtitle2">{props.info.message}</Typography>
              <Link
                component={RouterLink}
                to={props.info.data}
                variant="h6"
              >
                点击这里继续 →
              </Link>
              <img alt="Under development" className={classes.image}
                   src="https://img.ixingo.cn/undraw_chore_list_iof3.svg"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

};

export default ActivatePage;
