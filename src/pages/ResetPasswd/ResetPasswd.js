import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  IconButton,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: theme.spacing(80)
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
    height: '35vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/sign/sign-up.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
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
    height: '35vh',
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
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  reset:{
    marginTop: theme.spacing(6),
    paddingLeft: '16px',
    paddingRight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  signUpButton:{
    margin: theme.spacing(4, 0),
    width: '70%'
  },
  field: {
    width: '70%'
  }
}));

const RestPasswd = props => {

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
            <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                <ArrowBackIcon />
                </IconButton>
            </div>
            <div className={classes.reset}>
                <TextField className={classes.field}
                    id="standard-full-width"
                    label="请输入您注册星狗网所使用的邮箱"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                />
                <Button
                  className={classes.signUpButton}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  立即找回密码
                </Button>
            </div>
        </div>
    </div>
  );
};

RestPasswd.propTypes = {
  history: PropTypes.object
};

export default withRouter(RestPasswd);
