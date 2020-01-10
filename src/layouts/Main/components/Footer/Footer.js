import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';
import TypeWriter from 'react-typewriter';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    // paddingTop: theme.spacing(8)
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
	  <Typography variant="body1">
		    [ICP证:  皖ICP备15011098号]{'     '}
	  </Typography>
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
		A Material Design Full Stack App Powered by Spring Boot, Spring Security, JWT, MySQL, Redis, React, Bootstrap and Ant Design.
	  </Typography>
	  <Typography variant="caption" display="block">
	    &copy; Copyright 2020. 所有权利保留。本网站由汪师傅进行开发维护， 所有权利与解释权归汪师傅所有， 未经允许或授权， 严禁转载， 复制， 刻录与分发。
	    所有权利是指本网站所上载的信息与内容， 网站源代码不包含在此项权利申明中， 在遵守法律的前提下， 开发者可以在开源许可范围内自由使用， 分发， 修改以及商业使用。
	  </Typography>
	  <Typography variant="caption" display="block">
	    本网站构建并托管于百度智能云BCC， 静态文件使用七牛云进行CDN加速， 短信服务由腾讯云提供支持， DNS域名解析服务由阿里云万网提供， 微信公众号平台基于新浪云SAE进行构建。
	  </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
