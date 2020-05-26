import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Link, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
// import TypeWriter from 'react-typewriter';


const useStyles = makeStyles(theme => ({
  rootTop: {},
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
  },
  footLink :{
    fontSize: 14,
    fontWeight: 400,
    paddingTop: 20,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: 20,
    backgroundColor: 'aliceblue'
  }
}));

const Footer = props => {
  const {className} = props;

  const classes = useStyles();

  return (
    <div>
      <div className={clsx(classes.rootTop, className)}>
        <div className={classes.footCopyright}>
          <Typography variant="body1" className={classes.footer}>
            &copy; All Rights Reserved. 所有权利保留。&copy; Copyright 2018-2020 (iXingo)
          </Typography>
          <Typography variant="body1" className={classes.footer}>
            &copy; 本站由@程序员汪师傅开发，设计并维护
          </Typography>
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
            <a href={"https://weibo.com/ixingo"}
               style={{color: 'white', textDecoration: 'underline'}}>商务洽谈</a> |&nbsp;
            <a href={"https://ixingo.com.cn"}
               style={{color: 'white', textDecoration: 'underline'}}>HTTPS站点</a> &nbsp;
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
            违法和不良信息举报电话：12321
          </Typography>
        </div>
      </div>

      <div className={clsx(classes.footLink, className)}>
        <Grid container spacing={4} className={classes.root}>

          <Grid item xs={6} md={4}>
            <Typography  gutterBottom variant='h6' style={{color: 'black'}}>
              服务指南
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"服务协议"}>📋</span> <a href={"/user-agreement"} style={{textDecoration: 'underline'}}>服务协议</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"隐私政策"}>🔑</span> <a href={"/privacy"} style={{textDecoration: 'underline'}}>隐私政策</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"版权保护投诉指引"}>⚔️</span> <a href={"/copyright"} style={{textDecoration: 'underline'}}>版权保护投诉指引</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"开放平台"}>🧾</span> <a href={"https://github.com/iXingo/WebPageUI.git"} style={{textDecoration: 'underline'}}>开放平台</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"商务洽谈"}>🤝️</span> <a href={"https://weibo.com/ixingo"} style={{textDecoration: 'underline'}}>商务洽谈</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"关于@程序员汪师傅"}>👨‍🎓️</span> <a href={"/about-me"} style={{textDecoration: 'underline'}}>关于汪师傅</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"关于网站"}>🌐️</span> <a href={"/about"} style={{textDecoration: 'underline'}}>关于网站</a>
            </Typography>
          </Grid>


          <Grid item xs={6} md={4}>
            <Typography  gutterBottom variant='h6' style={{color: 'black'}}>
              社交/媒体
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"微博"}>👀</span> <a href={"https://weibo.com/ixingo"} style={{textDecoration: 'underline'}}>微博</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"LinkedIn"}>👔️</span> <a href={"https://www.linkedin.com/in/ixingo/"} style={{textDecoration: 'underline'}}>LinkedIn</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"StackOverFlow"}>💣️</span> <a href={"https://stackoverflow.com/users/6028692/ixingo"} style={{textDecoration: 'underline'}}>StackOverFlow</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"牛客网"}>🐮️</span> <a href={"https://www.nowcoder.com/profile/531527"} style={{textDecoration: 'underline'}}>牛客网</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"哔哩哔哩"}>👯‍♀️️</span> <a href={"https://space.bilibili.com/4130475"} style={{textDecoration: 'underline'}}>哔哩哔哩</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"知乎"}>🔎️</span> <a href={"https://www.zhihu.com/people/ixingo"} style={{textDecoration: 'underline'}}>知乎</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"V2EX"}>🌏️</span> <a href={"https://v2ex.com/member/iXingo"} style={{textDecoration: 'underline'}}>V2EX</a>
            </Typography>
          </Grid>


          <Grid item xs={12} md={4}>
            <Typography  gutterBottom variant='h6' style={{color: 'black'}}>
              导航链接
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"好友"}>🧍</span> <a href={"/friends"} style={{textDecoration: 'underline'}}>好友: 汪师傅和他的朋友们</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"计划"}>🚀</span> <a href={"/projects"} style={{textDecoration: 'underline'}}>计划: Project X</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"服务"}>🛵</span> <a href={"/services"} style={{textDecoration: 'underline'}}>服务: 咸鱼卖家</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"技术"}>👨‍💻</span> <a href={"/tech"} style={{textDecoration: 'underline'}}>技术: 技术笔记</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"教程"}>👨‍🏫</span> <a href={"/courses"} style={{textDecoration: 'underline'}}>教程: 21天学会编程[/doge]</a>
            </Typography>
            <Typography  gutterBottom variant='h6' style={{fontSize: 14, fontWeight:400, marginBottom: 2, color: 'black'}} color="textSecondary">
              <span role={"img"} aria-label={"博文"}>🏙</span> <a href={"/posts"} style={{textDecoration: 'underline'}}>博文: 一点随笔</a>
            </Typography>
          </Grid>

        </Grid>
      </div>
      <Divider/>
      <div className={clsx(classes.rootBottom, className)}>
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
        <img alt={'星狗网'} src={"https://img.ixingo.cn/pic/LOGO.png"} style={{width: 150}}/>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
