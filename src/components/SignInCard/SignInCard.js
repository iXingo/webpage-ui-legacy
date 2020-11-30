import React, {useEffect, useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {makeStyles} from '@material-ui/styles';
import {Button, Link, TextField, Typography} from '@material-ui/core';
import {notification} from 'antd';
import {login} from '../../util/APIUtils';
import {ACCESS_TOKEN} from '../../constants';


const schema = {
  usernameOrEmail: {
    presence: {allowEmpty: false, message: 'is required'},
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: {allowEmpty: false, message: 'is required'},
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    maxWidth: 800,
    alignItems: 'center',
    justifyContent: 'center',
    margin: "auto"
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
    }
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
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  tips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
}));

const SignInCard = (props) => {

  const {history,next} = props;
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
  };

  const handleSignIn = event => {
    event.preventDefault();
    const values = formState.values;
    const loginRequest = Object.assign({}, values);
    login(loginRequest)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        console.log(history);
        if(next){
          props.handleLogin(next);
          console.log("Next=>",next)
        }
        else props.handleLogin();
      }).catch(error => {
      if (error.status === 401) {
        notification.error({
          message: '星狗网 Web App',
          description: '少年，您的用户名或者密码不正确，请检查！'
        });
      } else {
        notification.error({
          message: '星狗网 Web App',
          description: error.message || '对不起，好像发生了什么事情，请您稍后重试！'
        });
      }
    });
  };

  const hasError = field => !!(formState.touched[field] && formState.errors[field]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.contentBody}>
          <form
            className={classes.form}
            onSubmit={handleSignIn}
          >
            <Typography
              align="center"
              className={classes.sugestion}
              color="textSecondary"
              variant="body1"
            >
              使用邮箱账号登录
            </Typography>
            <TextField
              className={classes.textField}
              error={hasError('usernameOrEmail')}
              fullWidth
              helperText={
                hasError('usernameOrEmail') ? formState.errors.usernameOrEmail[0] : null
              }
              label="邮箱账户地址"
              name="usernameOrEmail"
              onChange={handleChange}
              type="text"
              value={formState.values.usernameOrEmail || ''}
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              error={hasError('password')}
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              label="密码"
              name="password"
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
              variant="outlined"
            />
            <Button
              className={classes.signInButton}
              color="primary"
              disabled={!formState.isValid}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              立即登录
            </Button>

            <div className={classes.tips}>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                还没有账号?{' '}
                <Link
                  component={RouterLink}
                  to="/sign-up"
                  variant="body1"
                >
                  注册
                </Link>
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                忘记密码?{' '}
                <Link
                  component={RouterLink}
                  to="/reset-passwd"
                  variant="h6"
                >
                  找回密码
                </Link>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SignInCard.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignInCard);
