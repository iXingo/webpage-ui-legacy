import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {makeStyles} from '@material-ui/styles';
import {Button, IconButton, TextField, Typography} from '@material-ui/core';
import {notification} from 'antd';
import {resetPasswd} from '../../util/APIUtils';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


const schema = {
  password1: {
    presence: {allowEmpty: false, message: 'is required'},
    length: {
      // minimum: 6,
      maximum: 128
    }
  },
  password2: {
    presence: {allowEmpty: false, message: 'is required'},
    length: {
      // minimum: 6,
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    maxWidth: 800,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white,
    color: '#1a73e8',
  },
  bio: {
    // color: theme.palette.white,
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
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    margin: '120px auto',
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  suggestion: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  resetButton: {
    margin: theme.spacing(2, 0)
  },
  tips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tip : {
    marginTop: 30,
    marginBottom: 60
  }
}));

const ResetPasswd = (props) => {

  const {computedMatch: {params}} = props;

  const {email, code} = params;

  const {history} = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
    console.log(formState.errors);
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleReset = event => {
    // history.push('/');
    event.preventDefault();
    const values = formState.values;
    const {password1, password2} = values;
    if(password1 && password1 && !password1===password2){
      notification.error({
        message: '星狗网 Web App',
        description: '两次密码输入不一致！'
      });
    }
    const resetPasswdRequest = Object.assign({}, values);
    resetPasswdRequest.email = email;
    resetPasswdRequest.resetCode = code;
    resetPasswd(resetPasswdRequest)
        .then(response => {
          if(response.code===200){
            notification.success({
              message: '星狗网 Web App',
              description: response.data
            });
            history.push('/sign-in');
          }else{
            notification.error({
              message: '星狗网 Web App',
              description: response.data
            });
          }
        })
        .catch(error => {
          notification.error({
            message: '星狗网 Web App',
            description: error.message || '对不起，好像发生了什么事情，请您稍后重试！'
          });
        });
  };

  const hasError = field => !!(formState.touched[field] && formState.errors[field]);

  return (
      <div className={classes.root}>

        <div className={classes.content}>
          <div className={classes.contentHeader}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon/>
            </IconButton>
          </div>

          <div className={classes.contentBody}>
            <form
                className={classes.form}
                onSubmit={handleReset}
            >
              <Typography
                  align="center"
                  className={classes.suggestion}
                  color="primary"
                  variant="h1"
              >
                重置密码， 安全无虞。
              </Typography>
              <Typography
                align="center"
                className={classes.tip}
                color="textSecondary"
                variant="h5"
              >
                <span role={"img"} aria-label={"博文"} className={classes.emoji}>🔐</span> 您正在选择充值您的登录密码。如果这不是您的操作，可能您的账号已经泄露， 请联系@程序员汪师傅处理此事。
              </Typography>

              <TextField
                  className={classes.textField}
                  error={hasError('password1')}
                  fullWidth
                  helperText={
                    hasError('password1') ? formState.errors.password2[0] : null
                  }
                  label="密码"
                  name="password1"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password1 || ''}
                  variant="outlined"
              />
              <TextField
                  className={classes.textField}
                  error={hasError('password2')}
                  fullWidth
                  helperText={
                    hasError('password2') ? formState.errors.password2[0] : null
                  }
                  label="请重复您的密码"
                  name="password2"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password2 || ''}
                  variant="outlined"
              />
              <Button
                  className={classes.resetButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
              >
                重置密码
              </Button>
            </form>
          </div>
        </div>
      </div>
  );
};

ResetPasswd.propTypes = {
  history: PropTypes.object
};

export default withRouter(ResetPasswd);
