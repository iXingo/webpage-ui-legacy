import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    width: 200,
    height: 200,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
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
  );
}

export default Head;
