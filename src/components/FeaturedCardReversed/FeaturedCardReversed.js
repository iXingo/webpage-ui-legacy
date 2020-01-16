import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
      paddingRight: theme.spacing(3),
    },
    color: 'white',
    backgroundColor: '#1a73e8',
  },
  mainImg: {
    height: 320,
    maxHeight: 400,
    padding: 15
  },
  text: {},
}));


const FeaturedCardReversed = props => {
  const {card, history} = props;
  const classes = useStyles();
  const url = card.url;

  const clickUrl = () => {
    history.push(url);
  };

  return (
      <Grid container className={classes.main}>
        <Grid item md={6}>
          <img alt="Cover" className={classes.mainImg}
               src="https://developer.android.google.cn/images/home/design-illustration.svg"/>
        </Grid>
        <Grid item xs={12} md={6} className={classes.text}>
          <Typography overline gutterBottom variant='h5' style={{padding: '10px 0', color: '#8EB2F4'}}>
            {card.type}
          </Typography>
          <Typography overline gutterBottom variant='h2' style={{padding: '10px 0'}} color='inherit'>
            {card.title}
          </Typography>
          <Typography overline gutterBottom variant='h5' style={{padding: '30px 0', color: '#8EB2F4'}}>
            {card.description}
          </Typography>
          <Button variant="outlined" size="large" color="inherit" onClick={clickUrl}>
            查看更多...
          </Button>
        </Grid>
      </Grid>
  );
};


export default FeaturedCardReversed;