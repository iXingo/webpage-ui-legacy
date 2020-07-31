import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Button, IconButton, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {passwdReset} from "../../util/APIUtils";
import {notification} from "antd";


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: theme.spacing(80),

  },

  contentContainer: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  reset: {
    marginTop: theme.spacing(6),
    paddingLeft: '16px',
    paddingRight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    minWidth: 375
  },
  resetButton: {
    margin: theme.spacing(4, 0),
    width: '80%'
  },
  field: {
    width: '80%'
  }
}));

const PasswdReset = props => {

  const {history} = props;

  const classes = useStyles();
  const [value, setValue] = useState('');


  const handleBack = () => {
    history.goBack();
  };

  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const resetPaswd = event => {
    event.preventDefault();
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!pattern.test(value)) {
      notification["error"]({
        message: '星狗网 Web App',
        description: "邮箱格式不正确！"
      });
      return;
    }
    passwdReset(value).then(r => {
          const type = r.code === 200 ? "success" : "error";
          notification[type]({
                message: '星狗网 Web App',
                description: "服务器接收重置密码请求成功！" + r.data
              }
          )
        }
    );
  }

  return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.contentHeader}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon/>
            </IconButton>
          </div>

          <div className={classes.reset}>
            <Typography variant="h2" style={{marginTop: 40}}>请您勿需担心，</Typography>
            <Typography variant="h5" style={{marginBottom: 120}}>关于您和您的一切都不会丢失。</Typography>
            <TextField className={classes.field}
                       id="standard-full-width"
                       label="请输入您注册星狗网所使用的邮箱"
                       InputProps={{
                         startAdornment: (
                             <InputAdornment position="start">
                               <AccountCircle/>
                             </InputAdornment>
                         ),
                       }}
                       onChange={handleChange}
                       value={value}
            />
            <Button
                className={classes.resetButton}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={resetPaswd}
            >
              立即找回密码
            </Button>
          </div>
        </div>
      </div>
  );
};

PasswdReset.propTypes = {
  history: PropTypes.object
};

export default withRouter(PasswdReset);
