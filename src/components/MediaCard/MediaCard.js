import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import moment from 'moment';
import 'moment/locale/zh-cn';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Instagram} from "react-content-loader";
import {withRouter} from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";


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
    padding: 10,
  },
  summary: {
    color: '#5f6368',
    padding: '20px 0',
    fontWeight: 400,
    fontSize: 16
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  mata: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
  }
}));


const MediaCard = props => {

  const classes = useStyles();

  const {posts, history} = props;

  const openPost = id => {
    console.log('/post/' + id);
    history.push('/post/' + id);
  };

  if (!posts) {
    return <Instagram/>;
  }

  moment.locale();

  return (
    <Grid container>
      {posts.map(post => (
        <Grid item key={props.card} xs={12} md={4} className={classes.cardGrids}>
          <Card className={classes.cards} onClick={() => openPost(String(post.id))}>
            <CardMedia
              className={classes.cardMedias}
              image={post.picUrl}
              title={post.title}
            />
            <CardContent className={classes.cardContents}>
              <Typography gutterBottom variant="h3" component="h2" color="primary">
                {post.title}
              </Typography>
              <div className={classes.avatar}>
                <Avatar alt={post.createdBy.name} src={post.createdBy.headUrl} className={classes.medium}/>
                <div className={classes.mata}>
                  <Typography variant="h6" style={{color: 'black', fontWeight: 500}}>
                    {/*<span role={"img"} aria-label={"作者"}>👨‍🎓 </span> 作者: */}
                    {post.createdBy.name}
                  </Typography>
                  <Typography variant="h6" style={{color: 'grey'}}>
                    {/*<span role={"img"} aria-label={"发表时间"}>⌚ </span> 发布于: */}
                    {moment(Number.parseInt(post.creationDateTime,10)).format('LLLL')}
                  </Typography>
                </div>
              </div>
              <Typography variant="h5" className={classes.summary}>
                {post.summary}
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.tags}>
                {post.tags.map(tag => (
                  <div style={{paddingRight: 10}}>
                    <Chip label={tag.name} component="a" href="/index" clickable variant="outlined" size={"small"}/>
                  </div>
                ))}
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


export default withRouter(MediaCard);