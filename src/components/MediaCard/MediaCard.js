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
    paddingTop: '56.25%', // 16:9
  },
  cardContents: {
    flexGrow: 1,
  },
}));


const MediaCarcd = props => {

  const classes = useStyles();

  return (
    <Grid item key={props.card} xs={12} sm={6} md={4}>
      <Card className={classes.cards}>
        <CardMedia
          className={classes.cardMedias}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContents}>
          <Typography gutterBottom variant="h4" component="h2" color="primary">
            Python从入门到精通
          </Typography>
          <Typography variant="h5" >
            This is a media card. You can use this section to describe the content.
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