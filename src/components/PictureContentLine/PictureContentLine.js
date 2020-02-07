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
  },
  readmore: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const cards = [
  {
    picture: "http://wpimg.ixingo.cn/wp-content/uploads/2015/01/hello.png",
    title: "汪欣同学",
    content: "管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。"
  },
  {
    picture: "http://wx2.sinaimg.cn/mw690/954835c1ly8fn1hpbrypyj216o16o75r.jpg",
    title: "汪欣同学",
    content: "管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。"
  },
  {
    picture: "http://wx1.sinaimg.cn/mw690/954835c1ly8fka1ip5yucj216o153aba.jpg",
    title: "汪欣同学",
    content: "管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。"
  },
  {
    picture: "http://ww3.sinaimg.cn/mw690/954835c1jw8f35v4sq1uvj20ro0rpt9z.jpg",
    title: "汪欣同学",
    content: "管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。"
  },
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
            <Grid item key={card} xs={12} sm={6} md={3}>
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
                    {card.content}
                  </Typography>
                </CardContent>
                <Divider/>
                <CardActions className={classes.readmore}>
                  <Typography size="small" color="primary">
                    <Link color="primary" component={RouterLink} to={card.link} underline="hover"
                          variant="h6">查看全文...</Link>
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
      </Container>
    </React.Fragment>
  );
};

export default PictureContentLine;