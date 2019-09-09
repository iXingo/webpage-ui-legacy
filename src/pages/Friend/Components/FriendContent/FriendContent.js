import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root:{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    card: {
      maxWidth: 345,
      margin: 20,
      background: 'transparent',
      boxShadow: 'none',
    },
    media: {
      height: 140,
    },
    avatar: {
      margin: 'auto',
      width: 150,
      height: 150,
    },
    bigAvatar: {
      margin: 10,
      width: 150,
      height: 150,
    },
    name: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#3f51b5',
    },
    button: {
      justifyContent:'center',
    },
    intro : {
      fontSize : 14,
    },
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
      color: 'white'
    },
    pro:{
      marginTop: 64,
      marginBottom: 20,
      fontSize: 54,
      textAlign: 'center',
      justifyContent: 'center',
      padding: 10,
      fontWeight: 300,
      lineHeight : '50px',
      color: '#3f51b5',
    },
    subpro : {
      textAlign: 'center',
      fontWeight: 300
    },
    grid :{
      textAlign: 'center',
      justifyContent: 'center',
    },
    headimage: {
      height: 450,
      backgroundImage : 'url(images/img/undraw_programming_2svr.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'center',
    },
    mainGrid:{
      justifyContent: 'center',
      textAlign: 'center',
    },
    })
  );


  const People = props => {
    const classes = useStyles();
    const { friend } = props;
    return (
      <div className ={classes.root}>
        <Card className={classes.card}>
          <CardActionArea>
            <Grid container justify="center" alignItems="center" className={classes.avatar}>
                <Avatar alt="Remy Sharp" src={friend.pictureUrl} className={classes.bigAvatar} />
            </Grid>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                  {friend.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                  {friend.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.button}>
            <Button size="small" color="primary">查看</Button>
            <Button size="small" color="primary">分享</Button>
          </CardActions>
        </Card>
      </div>
    );
  }

export default People;