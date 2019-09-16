import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import AlignItemsList from '../AlignItemsList';
import HeaderUnit from '../HeaderUnit';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '60%',
    height: 300,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  section: {
    margin: '0 auto',
    padding: theme.spacing(3),
    maxWidth: 900,
    height: '100%',
    width: "100%",
  },
  read: {
    paddingTop: theme.spacing(10)
  },
  root: {
    backgroundColor: theme.palette.background.default,
    // height: '600'
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
    height: '200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/sign/sign-up.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px',
    padding: theme.spacing(8)
  },
  quoteText: {
    // color: theme.palette.white,
    color : '#3f51b5',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color : '#3f51b5',
  },
  bio: {
    // color: theme.palette.white
    color : '#3f51b5',
  },
  contentContainer: {},
  content: {
    // height: '35vh',
    display: 'flex',
    flexDirection: 'column'
  },
}));

const CardPaper = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.quote}>
          <div className={classes.quoteInner}>
            <Typography className={classes.quoteText} variant="h1">汪师傅:</Typography>
            <Typography className={classes.quoteText} variant="h1">看见，好时光</Typography>
            <div className={classes.person}>
              <Typography className={classes.name} variant="body1">&copy;Copyright 2019</Typography>
              <Typography className={classes.bio} variant="body2">Designed by Shawn Wang in Pudong New Area</Typography>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
        <div className={classes.content}>
          <HeaderUnit />
        </div>
      </div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={4} className={classes.cardGrid} >
          <Grid item  >
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title"/>
                </Hidden>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h1" variant="h5">标题</Typography>
                    <Typography variant="subtitle2" paragraph color="textSecondary">2019年8月3日</Typography>
                    <Typography variant="subtitle2" paragraph>
                      2013年注册第一个域名，申请的第一个主机，配置第一个WordPress程序开始，就一直想从前端和后端搭建写一个博客。
                      这些年折折腾腾，也没搞出来，当然也没写出什么有意思的东西。
                      今天，我再次出发，在这个网站（再次）开始我的博客生涯，头也不回的开始我的程序人生。
                    </Typography>
                    <Typography variant="subtitle2" color="primary" className={classes.read}>继续阅读...</Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
        <div className={classes.section}>
          <AlignItemsList></AlignItemsList>
          <AlignItemsList></AlignItemsList>
          <AlignItemsList></AlignItemsList>
        </div>
      </Container>
    </React.Fragment>
  );
};


export default CardPaper;
