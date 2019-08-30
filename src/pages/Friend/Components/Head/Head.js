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
import Slide from '@material-ui/core/Slide';
import CssBaseline from '@material-ui/core/CssBaseline';

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
        <Grid container className={classes.mainGrid}>
          <Grid container item xs={12} md={12} className={classes.headimage} />
          <Grid item xs={10} md={8} className={classes.grid}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.pro}>
              他们，正影响着我。
            </Typography>
          </Grid>
          <Grid  item xs={10} md={8} className={classes.grid}>
            <Typography variant="h3" align="center" color="textSecondary" paragraph className={classes.subpro}>
              人生得一知己足矣， 斯世当以同怀视之。
            </Typography>
          </Grid>
          <Grid  item xs={10} md={8} className={classes.grid}>
            <Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.subpro}>
              这是一个非常非常长的简介文本，使用中文来进行测试。这是一个非常非常长的简介文本，使用中文来进行测试。
              这是一个非常非常长的简介文本，使用中文来进行测试。这是一个非常非常长的简介文本，使用中文来进行测试。
              这是一个非常非常长的简介文本，使用中文来进行测试。
            </Typography>
          </Grid>
        </Grid>
        <div className ={classes.root}>
          <Card className={classes.card}>
            <CardActionArea>
              <Grid container justify="center" alignItems="center" className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.bigAvatar} />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                  汪欣
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.button}>
              <Button size="small" color="primary">
                查看
              </Button>
              <Button size="small" color="primary">
                分享
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
                  肖恩王
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

    </div>
    </React.Fragment>
  );
}

export default Head;
