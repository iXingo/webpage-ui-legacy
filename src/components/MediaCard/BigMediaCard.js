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
import {Instagram} from "react-content-loader";


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
    padding: theme.spacing(2),
  },
  cards: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedias: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '48%', // 16:9
    height: 180,
    verticalAlign: 'middle',
  },
  cardContents: {
    flexGrow: 1,
    padding: 20,
  },
  summary :{
    padding: '30px 0',
  }
}));


const BigMediaCarcd = props => {

  const classes = useStyles();
  const { posts } = props;
  if(!posts){
    return <Instagram />;
  }

  return (
    <Grid container>
      {posts.map(post => (
        <Grid item key={props.card} xs={12} md={6} className={classes.cardGrids}>
          <Card className={classes.cards}>
            <CardMedia
              className={classes.cardMedias}
              image= {post.picUrl}
              title= {post.title}
            />
            <CardContent className={classes.cardContents}>
              <Typography gutterBottom variant="h3" component="h2" color="primary">
                {post.title}
              </Typography>
              <Typography variant="h5" className={classes.summary}>
                {post.summary}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardContents}>
              <Button size="small" color="primary">
                查看全文...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


export default BigMediaCarcd;