import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Divider, Link} from '@material-ui/core';
import {ContentTitle} from '../../components';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: 1600,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 10px 0',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 200,
  },
  cardContent: {
    flexGrow: 1,
    padding: '16px 0 16px'
  },
  readmore: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0 8px'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  info: {
    marginTop: 60
  }
}));


const cards = [
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Simon Shi",
    content: "Simon与汪师傅相识于2011年。",
    description: "Simon Shi与汪师傅曾经是对门宿舍的同班同学， 并且在之后的学习和考研过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Heaven Xia",
    content: "Heaven与汪师傅相识于2015。",
    description: "Simon Shi与汪师傅曾经是研究生同门同学， 并且在工作之后的前两年成为室友，在此过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Doctor Xiong",
    content: "Xiong与汪师傅相识于2007年。",
    description: "Doctor Xiong与汪师傅曾经是高中同学，并且是前后桌，在此过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Justin Qian",
    content: "Justin与汪师傅相识于2011年。",
    description: "Justin Qian与汪师傅曾经是大学同学与室友，并且在共同的学习和生活过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Jacob Zhang",
    content: "Jacob与汪师傅相识于2011年。",
    description: "Jacob Zhang与汪师傅曾经是大学同学/室友，并且在共同的学习、生活、社团工作过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Flag Hong",
    content: "Flag与汪师傅相识于2011年。",
    description: "Flag Hong与汪师傅曾经是大学同学/室友，并且在共同的学习、生活、考研过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Sevn Sun",
    content: "Sevn与汪师傅相识于2015年。",
    description: "Sevn Sun与汪师傅曾经是研究生同门/室友，并且在共同的学习、生活过程中结下了深厚的友谊。",
    link: "friend/001"
  },
  {
    picture: "https://img.ixingo.cn/default_head_pic.png",
    title: "Yongye Li",
    content: "Yongye与汪师傅相识于2008年。",
    description: "Sevn Sun与汪师傅曾经是高中同桌，并且在共同的学习过程中结下了深厚的友谊。",
    link: "friend/001"
  }
];


const PictureContentLine = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <ContentTitle context={props.context}/>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card.title} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.picture}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4" component="h2">
                    {card.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {card.content} <br/>
                    {card.description}
                  </Typography>
                </CardContent>
                <Divider/>
                <CardActions className={classes.readmore}>
                  <Typography size="small" color="primary">
                    <Link color="primary" component={RouterLink} to={card.link} underline="hover"
                          variant="caption"> 进一步了解"{card.title}"的信息...</Link>
                  </Typography>
                  <Typography size="small" color="primary">
                    <Link color="primary" component={RouterLink} to={card.link} underline="hover"
                          variant="h6">→</Link>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography paragraph gutterBottom color="textSecondary" align="center" className={classes.info}>
          * 更多好友信息展示与申请收录请关注<Link color="primary" component={RouterLink} to={'/friends'} underline="hover"
                                  variant="h6">好友</Link>频道，当前仅随机显示部分好友。
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PictureContentLine;