import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)',
    alignItems: 'center',
    justifyContent: 'space-betwwen',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: 'white',
    backgroundColor: 'primary',
  },
  reverse: {
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)',
    alignItems: 'center',
    justifyContent: 'space-betwwen',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: 'white',
    backgroundColor: '#1a73e8',
  },
  mainImg: {
    height: 320,
    maxHeight: 400,
    padding: 15

  },
  grid: {
    paddingRight: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const FeaturedCardReversed = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={4} className={classes.root}>
        <Grid item  xs={12} md={6}>
          <Grid container className={classes.main}>
            <Grid item xs={12} md={6}>
              <Typography overline gutterBottom variant='h5' style={{padding: '10px 0'}} color='textSecondary'>
                新闻视角
              </Typography>
              <Typography overline gutterBottom variant='h2' style={{padding: '10px 0'}} color="primary">
                汪师傅的会客厅！
              </Typography>
              <Typography overline gutterBottom variant='h5' style={{padding: '30px 0'}} color="textSecondary">
                Get your apps ready for the latest version of Android! Build new experiences with dark theme and gesture navigation, support new protections for user privacy and security, enhance your apps with improved connectivity APIs, high-performance codecs, better biometrics, foldables support, and much more!
              </Typography>
              <Button variant="outlined" size="large" color="primary">
                查看更多
              </Button>
            </Grid>
            <Grid item md={6}>
              <img alt="Cover" className={classes.mainImg} src="images/img/undraw_special_event_4aj8.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Grid container className={classes.reverse}>
            <Grid item xs={12} md={6}>
              <Typography overline gutterBottom variant='h5' style={{padding: '10px 0'}} color='inherit'>
                新闻视角
              </Typography>
              <Typography overline gutterBottom variant='h2' style={{padding: '10px 0'}} color='inherit'>
                汪师傅的会客厅！
              </Typography>
              <Typography overline gutterBottom variant='h5' style={{padding: '30px 0', color: '#8EB2F4'}} >
                Get your apps ready for the latest version of Android! Build new experiences with dark theme and gesture navigation, support new protections for user privacy and security, enhance your apps with improved connectivity APIs, high-performance codecs, better biometrics, foldables support, and much more!
              </Typography>
              <Button variant="outlined" size="large" color="inherit">
                查看更多
              </Button>
            </Grid>
            <Grid item md={6}>
              <img alt="Cover" className={classes.mainImg} src="images/img/undraw_special_event_4aj8.svg" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default FeaturedCardReversed;