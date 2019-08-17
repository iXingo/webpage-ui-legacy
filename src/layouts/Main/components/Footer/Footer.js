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
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
	  <TypeWriter typing={1}>
		<Typography variant="body1">
			&copy;{' '}
			<Link
			component="a"
			href="http://shawn.wang/"
			target="_blank"
			style={{paddingRight: 5}}
			>
			Shawn Wang
			</Link>
			{' '} 星狗网 | 看见，好时光。
		</Typography>
		<Typography variant="caption" display="block">
			&copy; Copyright 2019. All rights Reserved. Created with love by Shawn Wang at NVIDIA.
		</Typography>
		<Typography variant="caption" display="block">
			A Material Design Full Stack App Powered by Spring Boot, Spring Security, JWT, MySQL, Redis, React, Bootstrap and Ant Design. 
		</Typography>
      </TypeWriter>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
