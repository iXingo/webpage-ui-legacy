import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Typography} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: 100,
    textAlign: 'center'
  },
  image: {
    marginTop: 20,
    display: 'inline-block',
    maxWidth: '100%',
    height: 400
  },
  buttonContent: {
    marginTop: 20,
    padding: '15px 32px',
    fontSize: 14,
    color: '#1074e7',
    backgroundColor: 'hsla(0,0%,100%,0)',
    borderColor: 'rgba(16,116,231,.5)',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #1074e7',
    borderRadius: 3,
    transition: '.2s',
  },
}));

const NotFound = props => {

  const classes = useStyles();
  const {history} = props;

  const handleLogin = () => {
    history.push("/sign-in");
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1">401: 您可能需要登录才能访问该页面</Typography>
            <Typography variant="subtitle2">您正在访问受限的资源,因为某些原因该页面的安全性需要得到保证,因此您需要登录才能进行下一步操作。</Typography>
            <Typography
              variant="subtitle2">此页面可能记录了一个受保护的资源,系统管理员汪师傅设置了该页面必须在登录条件下才能被访问,您可以尝试联系汪师傅以获得关于此页面的更多详细帮助。
            </Typography>
            <Button className={classes.buttonContent} onClick={() => handleLogin()}>
              点此登录 →
            </Button>
            <img alt="Please login" className={classes.image} src="https://img.ixingo.cn/undraw_coding_6mjf.svg"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(NotFound);
