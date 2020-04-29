import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white
  },
  header: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 24px',
    [theme.breakpoints.up('md')]: {
      padding: '160px 24px'
    }
  },
  buttons: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  mediaContainer: {
    margin: '0 auto',
    maxWidth: 1600,
    padding: theme.spacing(0, 2),
    overflow: 'hidden'
  },
  media: {
    width: '100%'
  },
  stats: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1)
  },
  statsInner: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    margin: '0 auto'
  }
}));

const Header = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Typography
          align="center"
          gutterBottom
          variant="h1"
        >
          星狗网 - 看见,好时光.
        </Typography>
        <Typography
          align="center"
          component="h2"
          variant="subtitle1"
        >
          星狗网是汪欣同学自主开发的一个专注于科技和生活分享的网站，在这里你会看到汪欣同学在关于程序设计（前端，后端，数据处理），工作， 生活和文艺方面的所有分享。欢迎关注@程序员汪师傅 一起交流分享，共同进步！A Material Design Full Stack App built with Spring Boot, Spring Security, JWT, MySQL, Redis, React, Bootstrap and Ant Design.
        </Typography>
        <div className={classes.buttons}>
          <Button
            color="primary"
            component="a"
            href="https://github.com/iXingo/WebPageUI"
            target="_blank"
            variant="contained"
          >
            <GitHubIcon style={{marginRight: 10}}/> 查看源码
          </Button>
        </div>
      </div>
      <div className={classes.mediaContainer}>
        <img
          alt="Demos"
          className={classes.media}
          src="/images/presentation/header.jpg"
        />
      </div>
      <div className={classes.stats}>
        <Grid
          alignItems="center"
          className={classes.statsInner}
          container
          justify="center"
          spacing={3}
        >
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              30+src/pages/Presentation/components/Header/Header.js:178src/pages/Presentation/src/pages/Presentation/components/Header/Header.jssrc/pages/Presentation/components/Header/Header.js:178:178components/Header/Header.js:178
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Demo Pages
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              UX
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Complete Flows
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <Typography
              color="inherit"
              gutterBottom
              variant="h3"
            >
              300+
            </Typography>
            <Typography
              color="inherit"
              variant="body2"
            >
              Components
            </Typography>
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            xs={12}
          >
            <div>
              <img
                alt="React"
                src="/images/react.png"
              />
            </div>
            <Typography
              color="inherit"
              variant="body2"
            >
              React Hooks API
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
