import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  
  cardGrids: {
    // paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  cards: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedias: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '30%', // 16:9
    height: 180,
    verticalAlign: 'middle',
  },
  cardContents: {
    flexGrow: 1,
  },
  summary :{
    padding: '20px 0',
  }
}));


const MediaCarcd = props => {

  const classes = useStyles();

  return (
    <Grid item key={props.card} xs={12} sm={6} md={4}>
      <Card className={classes.cards}>
        <CardMedia
          className={classes.cardMedias}
          image="https://developers.google.cn/site-assets/images/news/2019_dsc_leads_720.jpg"
          title="Image title"
        />
        <CardContent className={classes.cardContents}>
          <Typography gutterBottom variant="h3" component="h2" color="primary">
            Python从入门到精通
          </Typography>
          <Typography variant="h5" className={classes.summary}>
          Developer Student Clubs train thousands of student developers globally and work with their communities to solve real-life problems. University students who lead a DSC gain access to Google technology, events, and mentorship while training their local community through fun meetups, project building activities, and global competitions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            查看全文
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}


export default MediaCarcd;