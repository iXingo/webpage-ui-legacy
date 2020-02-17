import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Link, Typography} from '@material-ui/core';
// import TypeWriter from 'react-typewriter';


const useStyles = makeStyles(theme => ({
  rootTop: {
  },
  rootBottom: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  footCopyright: {
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

const Footer = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <div>
      <div {...rest} className={clsx(classes.rootTop, className)}>
        <div className={classes.footCopyright}>
          <Typography variant="body1" className={classes.footer}>
            <a href={"/about"}
               style={{color: 'white', textDecoration: 'underline'}}>关于星狗网站</a> |&nbsp;
            <a href={"/about-me"}
               style={{color: 'white', textDecoration: 'underline'}}>关于站长@程序员汪师傅</a> |&nbsp;
            <a href={"/user-agreement"}
               style={{color: 'white', textDecoration: 'underline'}}>服务协议</a> |&nbsp;
            <a href={"/privacy"}
               style={{color: 'white', textDecoration: 'underline'}}>隐私政策</a> |&nbsp;
            <a href={"/copyright"}
               style={{color: 'white', textDecoration: 'underline'}}>版权保护投诉指引</a> |&nbsp;
            <a href={"https://github.com/iXingo/WebPageUI.git"}
               style={{color: 'white', textDecoration: 'underline'}}>开放平台</a> |&nbsp;
            <a href={"https://weibo.com/ixingo"} style={{color: 'white', textDecoration: 'underline'}}>商务洽谈</a> &nbsp;
          </Typography>
          <Typography variant="body1" className={classes.footer}>
            <a href={"/index"}
               style={{color: 'white', textDecoration: 'underline'}}>网站首页</a> |&nbsp;
            <a href={"http://www.ah12377.cn/"}
               style={{color: 'white', textDecoration: 'underline'}}>安徽省互联网和不良信息举报平台</a> |&nbsp;
            <a href={"http://gat.ah.gov.cn/"}
               style={{color: 'white', textDecoration: 'underline'}}>安徽省公安厅</a> |&nbsp;
            <a href={"https://ahca.miit.gov.cn/"}
               style={{color: 'white', textDecoration: 'underline'}}>安徽省通信管理局</a>
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
            Copyright 2018 - 2020 iXingo. All Rights Reserved. 所有权利保留。本站由@程序员汪师傅开发，设计并维护
          </Typography>
        </div>
      </div>
      <div {...rest} className={clsx(classes.rootBottom, className)}>
        <Typography variant="body1">
          &copy;{' '}
          <Link component="a" href="http://shawn.wang/" target="_blank" style={{paddingRight: 5}}>
            Shawn Wang
          </Link>
          星狗网 | 看见，好时光。
        </Typography>
        <Typography variant="caption" display="block">
          &copy; Copyright 2020. All rights Reserved. Created with love by Shawn Wang at NVIDIA.
        </Typography>
        <Typography variant="caption" display="block">
          A Material Design Full Stack App Powered by Spring Boot, Spring Security, JWT, MySQL, Redis, React, Bootstrap
          and Ant Design.
        </Typography>
        <Typography variant="caption" display="block">
          &copy; Copyright 2020. 所有权利保留。本网站由汪师傅进行开发维护， 所有权利与解释权归汪师傅所有， 未经允许或授权， 严禁转载， 复制， 刻录与分发。
          所有权利是指本网站所上载的信息与内容， 网站源代码不包含在此项权利申明中， 在遵守法律的前提下， 开发者可以在开源许可范围内自由使用， 分发， 修改以及商业使用。
        </Typography>
        <Typography variant="caption" display="block">
          本网站构建并托管于百度智能云BCC， 静态文件使用七牛云进行CDN加速， 短信服务由腾讯云提供支持， DNS域名解析服务由阿里云万网提供， 微信公众号平台基于新浪云SAE进行构建。
        </Typography>
        <Typography variant="caption" style={{marginTop: 10, color: 'black', fontSize: 12}}>
          ICP证: 皖ICP备15011098号
        </Typography>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
