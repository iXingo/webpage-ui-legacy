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
            NVIDIA Super系列显卡正式发布！】全新 GeForce RTX SUPER系列核心更多、时钟频率更高，其性能较 RTX 20 系列提升最高可达 25%。
            T CORES：
            依托于专用光线追踪硬件，可实现真实的阴影、反射、折射和全局照明。
            TENSOR CORES：
            人工智能正在推动着有史以来最伟大的技术革命，Turing 将其带入了个人图形计算领域。您可以通过体验 NVIDIA DLSS 给游戏带来的巨大性能提升，来感受 AI 计算的强悍之处。
            新一代着色技术：
            可变速率着色集中处理细节丰富的区域，从而提高性能。Mesh Shader 的高级几何处理能力支持每个场景中更多的对象，因而能够渲染更复杂的环境。
            并发处理：
            同步浮点和整数处理使 Turing GPU 能够更有效地处理当今游戏大作更为繁重的运算任务。
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