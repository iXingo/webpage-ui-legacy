import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  tips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

const SmallPostCard = props => {
  const classes = useStyles();
  const { post } = props;
  return (
    <Grid item key={post.title} xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h4" style={{color:'#1a73e8'}}>{post.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <div className={classes.tips}>
                  <DateRangeIcon className={classes.icon} />{post.date}
                </div>
              </Typography>
              <Typography variant="subtitle1" paragraph>{post.description}</Typography>
              <Typography variant="subtitle1" color="primary">查看全文...</Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default SmallPostCard;