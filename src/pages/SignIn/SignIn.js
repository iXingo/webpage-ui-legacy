import React, {useEffect, useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {makeStyles} from '@material-ui/styles';
import {Button, Grid, IconButton, Link, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { SvgIcon } from '@material-ui/core';
import {notification} from 'antd';
import {login} from '../../util/APIUtils';
import {ACCESS_TOKEN} from '../../constants';
// import Home from '../Home';


// const FacebookIcon = () => {
//   return (
//     <SvgIcon>
//       <path d="M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z" />
//     </SvgIcon>
//   );
// }

// const GoogleIcon = () => {
//   return (
//     <SvgIcon>
//       <path d="M21,12.2177419 C21,13.9112905 20.6311475,15.4233869 19.8934426,16.7540323 C19.1557377,18.0846776 18.1168031,19.1249998 16.7766393,19.875 C15.4364756,20.6250002 13.8934424,21 12.147541,21 C10.4999998,21 8.97540984,20.5947579 7.57377049,19.7842742 C6.17213115,18.9737905 5.05942604,17.8790323 4.23565574,16.5 C3.41188543,15.1209677 3,13.6209679 3,12 C3,10.3790321 3.41188543,8.87903226 4.23565574,7.5 C5.05942604,6.12096774 6.17213115,5.02620949 7.57377049,4.21572581 C8.97540984,3.40524212 10.4999998,3 12.147541,3 C14.5327871,3 16.5737705,3.78629051 18.2704918,5.35887097 L15.7991803,7.71774194 C15.0122953,6.96774175 14.0655738,6.52016129 12.9590164,6.375 C11.9262295,6.22983871 10.9057375,6.375 9.89754098,6.81048387 C8.88934445,7.24596774 8.07786904,7.89919355 7.46311475,8.77016129 C6.79918033,9.71370968 6.46721311,10.7903228 6.46721311,12 C6.46721311,13.0403228 6.72540984,13.9899192 7.24180328,14.8487903 C7.75819672,15.7076615 8.4467215,16.3971776 9.30737705,16.9173387 C10.1680326,17.4374998 11.1147541,17.6975806 12.147541,17.6975806 C13.2540984,17.6975806 14.2254096,17.455645 15.0614754,16.9717742 C15.7254098,16.5846772 16.2786885,16.0645161 16.7213115,15.4112903 C17.0409838,14.8790321 17.2499998,14.3467744 17.3483607,13.8145161 L12.147541,13.8145161 L12.147541,10.6935484 L20.852459,10.6935484 C20.9508199,11.2258066 21,11.7338712 21,12.2177419 Z" />
//     </SvgIcon>
//   );
// }

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
    height: 'calc(100vh - 56px)'
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
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://img.ixingo.cn/sign-in.jpg)',
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
    color: '#1a73e8',
    fontWeight: 300
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
    height: '100%',
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
  sugestion: {
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

const SignIn = (props) => {

  const {history, currentUser} = props;
  if (currentUser) {


    const notificationType = "success";
    notification[notificationType]({
      message: '星狗网 Web App',
      description: '您已经是登录状态啦！不需要登录哦～为您跳转到到首页看看吧～',
    });
    history.push('/index');
  }

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

  const handleBack = () => {
    history.goBack();
  };

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
    // history.push('/');
    const values = formState.values;
    const loginRequest = Object.assign({}, values);
    login(loginRequest)
        .then(response => {
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          props.handleLogin();
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
  document.title = "星狗网 | 登录星狗网， 看见好时光";

  return (
      <div className={classes.root}>
        <Grid
            className={classes.grid}
            container
        >
          <Grid
              className={classes.quoteContainer}
              item
              lg={6}
          >
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
                  程序人生的寂静，欢喜
                </Typography>
                <div className={classes.person}>
                  <Typography
                      className={classes.name}
                      variant="body1"
                  >
                    Shawn Wang
                  </Typography>
                  <Typography
                      className={classes.bio}
                      variant="body2"
                  >
                    Designed by Shawn Wang in Pudong New Area.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
              className={classes.content}
              item
              lg={6}
              xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon/>
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form
                    className={classes.form}
                    onSubmit={handleSignIn}
                >
                  <Typography
                      className={classes.title}
                      variant="h2"
                  >
                    登录
                  </Typography>

                  <Typography
                      color="textSecondary"
                      gutterBottom
                  >
                    为什么要登录？登录后可以进行评论以及可以获得更佳的个性化体验。
                  </Typography>
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
                  <Grid
                      className={classes.socialButtons}
                      container
                      spacing={2}
                  >
                    {/* <Grid item>
                    <Button
                      color="primary"
                      onClick={handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      <FacebookIcon className={classes.socialIcon} />
                      使用QQ账号登录
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={handleSignIn}
                      size="large"
                      variant="contained"
                    >
                      <GoogleIcon className={classes.socialIcon} />
                      使用Google账号登录
                    </Button>
                  </Grid> */}
                  </Grid>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
