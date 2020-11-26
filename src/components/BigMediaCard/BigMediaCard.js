import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
  summary: {
    padding: '20px 0',
  }
}));


const BigMediaCard = props => {

  const classes = useStyles();
  const {post,history} = props;
  const openNews = ()=> {
    history.push("post/" + post.id);
  };

  return (
    <Grid item key={props.card} xs={12} sm={6} md={4}>
      <Card className={classes.cards}>
        <CardMedia
          className={classes.cardMedias}
          image={post.picUrl}
        />
        <CardContent className={classes.cardContents}>
          <Typography gutterBottom variant="h3" component="h2" color="primary">
            {post.title}
            {/*{props.post.title}*/}
          </Typography>
          <Typography variant="h5" className={classes.summary}>
            {post.summary}
            {/*2020年1月1日， 汪师傅先后前往苏州和杭州实现元旦旅行。期间分别会晤了Jacob Zhang，Simon Shi以及Justin Qian三位好友，并分别与他们*/}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => openNews()}>
            查看全文 →
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );


};


export default BigMediaCard;