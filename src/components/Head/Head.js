import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root:{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
  },
  card: {
    maxWidth: 345,
    margin: 20,
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
    fontSize: 18
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
    padding: 10,
    fontWeight: 300
  },
  subpro : {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 300
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Head = propd => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <CssBaseline />
        {/* Hero unit */}
        <img src='images/img/undraw_to_the_moon_v1mv.svg'/>
        <Typography gutterBottom variant="h5" component="h2" className={classes.pro}>
            轻轻地， 改变一切。
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.subpro}>
              Something short and leading about the collection below—its contents, the creator, etc.
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.subpro}>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
        </Typography>
        <div className ={classes.root}>
        <Card className={classes.card}>
            <CardActionArea>
                <Grid container justify="center" alignItems="center" className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.bigAvatar} />
                </Grid>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
                <Grid container justify="center" alignItems="center" className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.bigAvatar} />
                </Grid>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                汪师傅
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions className={classes.button}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                   查看简介
                </Button>
            </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
                <Grid container justify="center" alignItems="center" className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.bigAvatar} />
                </Grid>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Sound
                    </Typography>
                    <Button color="inherit" onClick={handleClose}>
                    save
                    </Button>
                </Toolbar>
                </AppBar>
                <List>
                <ListItem button>
                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                </ListItem>
                </List>
            </Dialog>
        </CardActionArea>
        <CardActions className={classes.button}>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </div>
    </React.Fragment>
  );
}

export default Head;
