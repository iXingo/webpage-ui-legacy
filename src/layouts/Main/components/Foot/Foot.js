import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  footCopyright:{
    paddingTop: 20,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: 20,
    backgroundColor: '#1a73e8'
  },
  footer: {
    textAlign: 'center',
    color: 'white',
  }
}));

const Foot = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footCopyright}>
        <Typography variant="body1" className={classes.footer}>
          <a href={"https://www.ixingo.com.cn/about"} style={{color:'white', textDecoration:'underline'}}>关于星狗</a> |&nbsp;
          <a href={"https://www.ixingo.com.cn/about"} style={{color:'white', textDecoration:'underline'}}>About Xindog</a> |&nbsp;
          <a href={"https://www.ixingo.com.cn/user-agreement"} style={{color:'white', textDecoration:'underline'}}>服务协议</a> |&nbsp;
          <a href={"https://www.ixingo.com.cn/privacy"} style={{color:'white', textDecoration:'underline'}}>隐私政策</a> |&nbsp;
          <a href={"https://www.ixingo.com.cn/copyright"} style={{color:'white', textDecoration:'underline'}}>版权保护投诉指引</a> |&nbsp;
          <a href={"https://github.com/iXingo/WebPageUI.git"} style={{color:'white', textDecoration:'underline'}}>开放平台</a> |&nbsp;
          <a href={"https://weibo.com/ixingo"} style={{color:'white', textDecoration:'underline'}}>商务洽谈</a> &nbsp;
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          <a href={"http://www.ah12377.cn/"} style={{color:'white', textDecoration:'underline'}}>安徽省互联网和不良信息举报平台</a> |&nbsp;
          <a href={"http://gat.ah.gov.cn/"} style={{color:'white', textDecoration:'underline'}}>安徽省公安厅</a> |&nbsp;
          <a href={"https://ahca.miit.gov.cn/"} style={{color:'white', textDecoration:'underline'}}>安徽省通信管理局</a> |&nbsp;
          <a href={"https://www.ixingo.com.cn"} style={{color:'white', textDecoration:'underline'}}>网站首页</a> &nbsp;

        </Typography>
        <Typography variant="body1" className={classes.footer}>
          ICP证: 皖ICP备15011098号
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          违法和不良信息举报电话：12321
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          星狗网络&nbsp;&nbsp;版权所有
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          Copyright 2018 - 2020 iXingo. All Rights Reserved
        </Typography>
      </div>
    </div>
  );
};

Foot.propTypes = {
  className: PropTypes.string
};

export default Foot;
