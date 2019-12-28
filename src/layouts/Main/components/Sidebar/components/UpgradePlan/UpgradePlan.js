import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, colors } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const UpgradePlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.media}>
        <img
          alt="开源网站"
          src="https://img.ixingo.cn/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          开源网站
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          星狗网为开源程序。 基于前后端分离架构构建，源代码已经在Github上开源（尚未完工）。
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          color="primary"
          component="a"
          href="https://github.com/iXingo/WebPageUI.git"
          variant="contained"
        >
          <GitHubIcon /> &nbsp;&nbsp;Github
        </Button>
        
      </div>
    </div>
  );
};

UpgradePlan.propTypes = {
  className: PropTypes.string
};

export default UpgradePlan;
