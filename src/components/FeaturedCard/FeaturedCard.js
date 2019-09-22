import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-betwwen',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: '#1a73e8',
  },
  mainImg: {
    height: 320,
    maxHeight: 400,
    padding: 15

  },
}));


const FeaturedCard = props => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} md={6}>
        <Typography overline gutterBottom variant='h5' style={{padding: '10px 0'}} color='textSecondary'>
          新闻视角
        </Typography>
        <Typography overline gutterBottom variant='h2' style={{padding: '10px 0'}} color="primary">
          汪师傅的会客厅！
        </Typography>
        <Typography overline gutterBottom variant='h5' style={{padding: '30px 0'}} color="textSecondary">
          2013年注册第一个域名，申请的第一个主机，配置第一个WordPress程序开始，就一直想从前端和后端搭建写一个博客。 这些年折折腾腾，也没搞出来，当然也没写出什么有意思的东西。 今天，我再次出发，在这个网站（再次）开始我的博客生涯，头也不回的开始我的程序人生。        </Typography>
        <Button variant="outlined" size="large" color="primary">
          查看更多
        </Button>
      </Grid>
      <Grid item md={6}>
        <img alt="Cover" className={classes.mainImg} src="images/img/undraw_special_event_4aj8.svg" />
      </Grid>
    </Grid>
  );
}


export default FeaturedCard;