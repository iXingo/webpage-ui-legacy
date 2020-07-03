import React from 'react';
import {makeStyles} from '@material-ui/styles';
import SectionTitle from "../../../../components/SectionTitle";
import {TitleContent} from "../../../../components";
import SectionBlock from "../../../../components/SectionBlock";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    paddingTop: 100,
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 980,
    },
    marginBottom: 30,
    marginTop: 30
  },
  title: {
    maxWidth: 980,
    margin: '0 auto',
    padding: '20px auto',
    textAlign: "center"
  },
  icon: {
    height: 64,
    width: 64,
    margin: '25px auto',
    // border: `1px solid ${theme.palette.divider}`,
    // borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 0 50%',
      width: 1200,
      transform: 'translateX(-50%)'
    },
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  focus: {
    maxWidth: 980,
    margin: '20px auto',
    textAlign: "center"
  },
  item: {
    padding: '10px auto',
    textAlign: 'left'
  },
  img: {
    height: 56,
    width: "auto",
    margin: '3px auto 9px',
    textAlign: 'left'
  }
}));

const WindowsService = props => {

  const classes = useStyles();
  const serviceSection = {
    image: 'https://img.ixingo.cn/pic/undraw_operating_system_4lr6.svg',
    title: '🛵 服务',
    content: '结合汪师傅在编程， 图片处理， 视频制作方面的一点小小的兴趣，星狗网推出一系列服务，可以方便的实现你想要的效果。',
    linkUrl: '',
    linkText: '汪师傅',
  };

  const title = {
    sectionTitle: '隆重推出：Windows程序制作服务',
    sectionContent: '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。' +
      '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。' +
      '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。' +
      '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。' +
      '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。',
  };

  const title1 = {
    sectionTitle: '在您熟悉的平台上运行您自己的应用。',
    sectionContent: '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。',
  };

  const title2 = {
    sectionTitle: '汪师傅亲手打造',
    sectionContent: '最重要的是，这一切由你最熟悉的程序员汪师傅倾力打造，而现在都唾手可得。',
  };

  document.title = "Windows程序制作 | 看见，好时光";

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <img alt="Product" className={classes.icon} src={'https://img.ixingo.cn/pic/windows.png'}/>
        <TitleContent context={title}/>
        <img src={'https://img.ixingo.cn/img/wangshifu.jpeg'} alt={'Developer'} className={classes.focus}/>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr/today.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0', lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr/arcade.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0',lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr-unified/chat_bubble.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0',lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr/today.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0',lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr/today.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0',lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <img src={'https://developer.apple.com/assets/elements/icons/wwdr/today.svg'} alt={''}
               className={classes.img}/>
          <Typography gutterBottom variant='h6' align={'left'} style={{color: 'black', fontSize: 17}}>
            服务指南
          </Typography>
          <Typography gutterBottom variant='h6' align={'left'}
                      style={{color: 'black', fontSize: 11, margin: '20px, 0, 0',lineHeight: 2}}>
            您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
          </Typography>
        </Grid>
      </Grid>
      {/*<img src={'https://img.ixingo.cn/pic/hero-circuit-bg.svg'} alt={'Developer'} className={classes.image}/>*/}
      {/*<SectionTitle  context={serviceSection}/>*/}
      <TitleContent context={title1}/>
      <img src={'https://developer.apple.com/app-store/tell-us/images/hero-large.jpg'} alt={'Developer'}
           className={classes.focus}/>

      <TitleContent context={title2}/>
      <img src={'https://img.ixingo.cn/img/wangshifu.jpeg'} alt={'Developer'} className={classes.focus}/>
      <SectionBlock/>

    </div>
  );
};

export default WindowsService;
