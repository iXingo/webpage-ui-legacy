import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-betwwen',
    padding: '24px 24px 0',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0),
      paddingRight: 0,
    },
    color: '#1a73e8',
  },
  profile: {
    color: 'white',
  },
  mainImg: {
    height: '100%',
    // maxHeight: 512,
    padding: '0 15px 0',

  },
}));


const FriendHeader = props => {

  const classes = useStyles();
  const { friend } = props;

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} md={5} className={classes.profile}>
        <Typography overline gutterBottom variant='h5' style={{padding: '10px 0' , color: '#8EB2F4'}} >
          好友
        </Typography>
        <Typography overline gutterBottom variant='h2' style={{padding: '10px 0', color: 'white'}} >
          {friend.name}
        </Typography>
        <Typography overline gutterBottom variant='h5' style={{padding: '30px 0',color: 'white' }} >
          {friend.description}
        </Typography>
        <Button variant="outlined" size="large" color="inherit">
          查看更多
        </Button>
      </Grid>
      <Grid item md={7}>
        <img alt="Cover" className={classes.mainImg} src={friend.pictureUrl} />
      </Grid>
    </Grid>
  );
}


export default FriendHeader;