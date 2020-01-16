import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-betwwen',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    color: '#1a73e8',
  },
  mainImg: {
    height: 320,
    maxHeight: 400,
    padding: 15

  },
}));


const FeaturedCard = props => {
  const {history} = props;
  const classes = useStyles();
  const card = {
    type: ' 汪师傅和他的朋友们',
    title: '汪师傅的会客厅！',
    date: '2019年8月15日',
    description: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
    imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
    url: '/friends'
  };

  const clickUrl = () => {
    history.push(card.url);
  };

  return (
      <Grid container className={classes.main}>
        <Grid item xs={12} md={6}>
          <Typography overline gutterBottom variant='h5' style={{padding: '10px 0'}} color='textSecondary'>
            {card.type}
          </Typography>
          <Typography overline gutterBottom variant='h2' style={{padding: '10px 0'}} color="primary">
            {card.title}
          </Typography>
          <Typography overline gutterBottom variant='h5' style={{padding: '30px 0'}} color="textSecondary">
            {card.description}
          </Typography>
          <Button variant="outlined" size="large" color="primary" onClick={clickUrl}>
            查看更多...
          </Button>
        </Grid>
        <Grid item md={6}>
          <img alt="Cover" className={classes.mainImg} src={card.imgUrl}/>
        </Grid>
      </Grid>
  );
};


export default FeaturedCard;