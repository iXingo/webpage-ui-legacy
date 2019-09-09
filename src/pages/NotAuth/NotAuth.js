import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    height: '80vh'
  },
  content: {
    paddingTop: 150,
    textAlign: 'center'
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));

const NotFound = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1">401: 您可能需要登录才能访问该页面</Typography>
            <Typography variant="subtitle2">您当前访问的页面是受保护的资源,为了保证该页面内容的安全性, 您需要获得登录.</Typography>
            <Typography variant="subtitle2">此页面记录了一个受保护的资源，系统管理员汪师傅设置了该页面必须在登录条件下才能被访问, 您可以尝试联系汪师傅以获得关于此页面的更多详细帮助。</Typography>
            <img alt="Please login" className={classes.image} src="/images/undraw_page_not_found_su7k.svg"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
