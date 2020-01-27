import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(0),
      // paddingTop: 20,
    },
    color: '#1a73e8',
    background: 'url(http://wpimg.ixingo.cn/wp-content/uploads/2015/01/IMG_5126.png)',
    backgroundSize: 'cover',
    width: '100%',
    height: 800
  },
  profile: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      // paddingTop: 20,
    },
  },
  center: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '48px 24px 0',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px 0',
      // paddingTop: 20,
    },
  },
  mainImg: {
    objectFit: 'cover',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0),
    },
    height: 600,
  },
}));


const MediaSection = props => {

  // const { friend } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.main}>
        <Grid item xs={12} md={12} className={classes.center} space={3}>
          <Typography overline gutterBottom variant='h4' style={{padding: '10px 0', color: 'white'}}>
            愿你行走半生，归来仍是少年
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{color: '#8EB2F4'}}>
            年少时候的很多期许，都在生活的磨砺中逐渐消失。
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{color: '#8EB2F4'}}>
            现在不过是在喧嚣的世界中的潜行者，希望幸福的阳光逐渐照进我逐渐暗淡的生活。
          </Typography>
          <Divider></Divider>
        </Grid>
        <Grid item md={5}>
          {/* <img alt="Cover" className={classes.mainImg} src={friend.pictureUrl} /> */}
        </Grid>
        <Grid item xs={12} md={3} className={classes.profile} space={3}>
          <Typography overline gutterBottom variant='h4' style={{padding: '10px 0', color: 'white'}}>
            党员
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{padding: '10px 0', color: '#8EB2F4'}}>
            热爱祖国，拥护党的领导。
          </Typography>
          <Typography overline gutterBottom variant='h4' style={{padding: '10px 0', color: 'white'}}>
            程序员
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{padding: '10px 0', color: '#8EB2F4'}}>
            误打误撞，跌跌撞撞进入了码农的圈子。既没有感慨万千，也没有自怨自艾，有的只是不悲不喜。
          </Typography>

        </Grid>
        <Grid item xs={12} md={3} className={classes.profile}>
          <Typography overline gutterBottom variant='h4' style={{padding: '10px 0', color: 'white'}}>
            上海打工者
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{padding: '10px 0', color: '#8EB2F4'}}>
            和大部分的穷人一样，是上海这个繁华都市中打工者的一员。不同的是，我还单身。
          </Typography>
          <Typography overline gutterBottom variant='h4' style={{padding: '10px 0', color: 'white'}}>
            垃圾
          </Typography>
          <Typography overline gutterBottom variant='h6' style={{padding: '10px 0', color: '#8EB2F4'}}>
            我时常如此认为自己，越长大就越觉得自己不过是一个垃圾。世界很大，优秀的人比你高富帅，还比你努力。
          </Typography>

        </Grid>
        <Grid item md={1}>
          {/* <img alt="Cover" className={classes.mainImg} src={friend.pictureUrl} /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MediaSection;