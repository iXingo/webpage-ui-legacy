import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '60%',
    // height: 300,
  },
  postCard: {
    marginBottom: theme.spacing(2),
  },
  read:{
    paddingTop: theme.spacing(5)
  }
}));

const PostCard = props => {
  
    const classes = useStyles();
    const clickCard = () => {
    }
  
    return (
      <div>
        <Link component={RouterLink} to="/post/7866307276669779968" underline="none">
          <CardActionArea component="a" href="#" className={classes.postCard} onClick={clickCard}>
            <Card className={classes.card}>
              <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image="/images/blog/UNADJUSTEDNONRAW_thumb_f6f.jpg" title="Image title"/>
              </Hidden>
              <div className={classes.cardDetails}>
                <CardContent>
                <Typography component="h1" variant="h3" style={{color:'#1a73e8'}}>我的青春消亡史之上海一年</Typography>
                <Typography variant="subtitle2" paragraph color="textSecondary">2019年8月3日</Typography>
                <Typography variant="subtitle2" paragraph>
                    2013年注册第一个域名，申请的第一个主机，配置第一个WordPress程序开始，就一直想从前端和后端搭建写一个博客。
                    这些年折折腾腾，也没搞出来，当然也没写出什么有意思的东西。
                    今天，我再次出发，在这个网站（再次）开始我的博客生涯，头也不回的开始我的程序人生。
                </Typography>
                <Typography variant="subtitle2" color="primary" className={classes.read}>
                  继续阅读...
                </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Link>
      </div>
    );
}

export default withRouter(PostCard);