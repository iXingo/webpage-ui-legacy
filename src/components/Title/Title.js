import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '36px 0',
    [theme.breakpoints.up('md')]: {
      padding: '36px 0',
      paddingRight: 0,
    },
    color: '#1a73e8',
  },
  mainImg: {
    // height: 320,
    maxHeight: 320,
    padding: 15

  },
}));


const Title = props => {
  const classes = useStyles();

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} md={8}>
        <Typography gutterBottom variant='h5' style={{padding: '10px 0'}} color='textSecondary'>
          新闻视角
        </Typography>
        <Typography gutterBottom variant='h2' style={{padding: '10px 0'}} color="primary">
          汪师傅的会客厅！
        </Typography>
        <Typography gutterBottom variant='h5' style={{padding: '30px 0', fontWeight: 300}}
                    color="textSecondary">
          2013年注册第一个域名，申请的第一个主机，配置第一个WordPress程序开始，就一直想从前端和后端搭建写一个博客。 这些年折折腾腾，也没搞出来，当然也没写出什么有意思的东西。
          今天，我再次出发，在这个网站（再次）开始我的博客生涯，头也不回的开始我的程序人生。 </Typography>
        <Button variant="contained" size="small" color="primary" style={{padding: '5px 25px'}}>
          进一步了解 →
        </Button>
      </Grid>
      <Grid item md={4}>
        <img alt="Cover" className={classes.mainImg}
             src="https://developers.google.cn/china/images/skyline_microsite_480.png"/>
      </Grid>
    </Grid>
  );
};


export default Title;