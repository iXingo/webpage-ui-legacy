import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 980,
    },
    marginBottom: 30,
    marginTop: 30
  },
  image: {
    height: 56,
    margin: '3px auto 9px'
  },
  item: {
    padding: '10px 30px',
    textAlign: 'left',
  },
  firstLine: {
    color: 'black',
    fontSize: 17
  },
  secondLine: {
    color: 'black',
    fontSize: 11,
    padding: '5px 10px',
    [theme.breakpoints.up('md')]: {
      padding: '10px 25px',
    },
  }
}));

const SectionBlock = props => {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4} className={classes.item}>
        <img src={'https://developer.apple.com/assets/elements/icons/wwdr/today.svg'} alt={''}
             className={classes.image}/>
        <Typography gutterBottom variant='h6' align={'center'} className={classes.firstLine}>
          服务指南
        </Typography>
        <Typography gutterBottom variant='h6' align={'center'} className={classes.secondLine}>
          您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.item}>
        <img src={'https://developer.apple.com/assets/elements/icons/wwdr/arcade.svg'} alt={''}
             className={classes.image}/>
        <Typography gutterBottom variant='h6' align={'center'} className={classes.firstLine}>
          服务指南
        </Typography>
        <Typography gutterBottom variant='h6' align={'center'}
                    className={classes.secondLine}>
          您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.item}>
        <img src={'https://developer.apple.com/assets/elements/icons/wwdr-unified/chat_bubble.svg'} alt={''}
             className={classes.image}/>
        <Typography gutterBottom variant='h6' align={'center'} className={classes.firstLine}>
          服务指南
        </Typography>
        <Typography gutterBottom variant='h6' align={'center'} className={classes.secondLine}>
          您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SectionBlock;