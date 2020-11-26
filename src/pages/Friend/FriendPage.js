import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link as RouterLink, withRouter} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import {FeaturedCard, FeaturedCardReversed} from "../../components";

const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '120px 10px 0'
  },
  firstLine: {
    fontSize: 32,
    // padding: 10,
    lineHeight: 1,
    fontWeight: 400,
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'black',
    // paddingTop: 20,
    lineHeight: 1,
    width: 350,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  text: {
    fontSize: 28,
    margin: 'auto',
    color: 'black',
    marginTop: 40,
    marginBottom: 40,
    lineHeight: 1,
    maxWidth: '40%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 80,
    marginBottom: 80,
    textAlign: 'center',
  },
  back: {
    backgroundImage: 'url(https://www.apple.com/jobs/images/teams/software/cecile-1/desktop@2x.jpg)',
    height: 420,
    margin: 'auto',
  },
  sectionTitle: {
    fontSize: 36,
    margin: 'auto',
    color: 'black',
    maxWidth: 500,
    marginTop: 40,
    marginBottom: 40,
    lineHeight: 1,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  sectionContent: {
    fontSize: 18,
    margin: 'auto',
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 1.2,
    maxWidth: '40%',
  },
  float: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 36,
    fontWeight: 500,
    margin: 'auto',
    color: 'black',
    lineHeight: 1,
    marginTop: 40,
    textAlign: 'center',
    marginBottom: 40,
    [theme.breakpoints.down('md')]: {
      position: 'initial',
    },
  },
  title: {
    [theme.breakpoints.down('md')]: {
      marginTop: 40
    },
  },
  content: {
    paddingTop: 18,
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1.2,
    [theme.breakpoints.down('md')]: {
      marginBottom: 40
    },
  },
  sectionLink: {
    fontSize: 18,
    fontWeight: 400,
    padding: '20px 0'
  },
  list: {
    marginBottom: theme.spacing(2),
  },
}));


const FriendPage = props => {
  const classes = useStyles();

  const card1 = {
    type: ' 汪师傅和他的朋友们',
    title: '汪师傅的会客厅！',
    date: '2019年11月15日',
    description: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
    imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
    url: '/friends',
  };

  const card2 = {
    type: ' 加入汪师傅的行列',
    title: '我也是汪师傅的小伙伴！',
    date: '2019年12月15日',
    description: '如果你发现你不在上面的列表中，你可以点击此处加入。',
    imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
    url: '/friends',
  };

  return (
    <React.Fragment>
      <Container className={classes.mainTitle}>
        <div className={classes.main}>
          <Typography variant="h6" gutterBottom color="textSecondary" align="center" className={classes.firstLine}>
            汪师傅和他的好朋友们
          </Typography>
          <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.secondLine}>
            时光易逝永不回
            往事只能回味
          </Typography>
          <img src={"https://img.ixingo.cn/web/friends.jpeg"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              山河不足重，重在遇知己。 汪师傅自2011年起就离开安徽，走上“求学”与“打工”之路。 当然这一路走来，当然得益于有很多好朋友的关心帮助， 也许你不经意的问候，就已经温暖汪师傅孤独的内心。
              但是汪师傅从来不是一个善于表达的人，也有着属于自己的偏执和执拗的性格。但是，有些事，也许你早已忘记，可是我依然还记得。
            </Typography>
          </div>


          <img src={"https://img.ixingo.cn/web/graduate.JPG"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.sectionTitle}>
              那些绝望的思绪，和那些希望的曙光。
            </Typography>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              汪师傅从来也不是一个更加坚强的人，也有属于自己脆弱的时光。但是，一些简单的瞬间却也早已温暖汪师傅的心。不管如何，也许你自己不觉得，但是在汪师傅的心里， 已经单方面宣布你是我的好朋友。
              感谢那些绝望的思绪中带给汪师傅的那些希望的曙光。
            </Typography>
            <Typography size="small" color="primary" className={classes.sectionLink}>
              <Link color="primary" component={RouterLink} to={'/index'} underline="hover"
                    variant="h5"> 进一步了解 →</Link>
            </Typography>
          </div>


          <img src={"https://img.ixingo.cn/web/music.jpeg"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.sectionTitle}>
              致敬每一张照片镜头背后的你，和那些难忘的瞬间。
            </Typography>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              每一张照片背后的瞬间，都有故事。镜头前面的汪师傅和镜头背后的你都会被铭记。
            </Typography>
            <Typography size="small" color="primary" className={classes.sectionLink}>
              <Link color="primary" component={RouterLink} to={'/index'} underline="hover"
                    variant="h5"> 进一步了解 →</Link>
            </Typography>
          </div>

          <img src={"https://img.ixingo.cn/web/sunrise.jpeg"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.sectionTitle}>
              世界很大，星空很远
            </Typography>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              汪师傅其实是一个不善言辞，但是又曾经挑战自己的人。以至于陷入人际交往中的迷惘，当然，随着岁月的变迁，汪师傅才逐渐明白赢回自我，遵从内心的重要。这个世界并不是需要讨好别人才能赢得尊重。
              你越重视别人反而会赢得轻视。只尊重并珍视那些尊重并珍视自己的人。
            </Typography>
            <Typography size="small" color="primary" className={classes.sectionLink}>
              <Link color="primary" component={RouterLink} to={'/index'} underline="hover"
                    variant="h5"> 进一步了解 →</Link>
            </Typography>
          </div>


          <div style={{position: 'relative', width: '100%'}}>
            <img src={"https://img.ixingo.cn/web/suzhou.jpeg"} alt={''}/>
            <span className={classes.float}>
              <div className={classes.title}>
                与远见卓识的你一起，在生活中勇攀高峰。
              </div>
              <div className={classes.content}>
              现在就开始，汪师傅愿意与远见卓识的你一起，共同在生活中挑战那些失望与迷茫。
              </div>
            </span>
          </div>

          <div>
            <Paper className={classes.list}>
              <FeaturedCard card={card1} {...props}/>
            </Paper>
            <Paper className={classes.list}>
              <FeaturedCardReversed card={card2}  {...props}/>
            </Paper>
          </div>


          <div className={classes.main}>
            <Typography variant="h6" gutterBottom color="textSecondary" align="center" className={classes.firstLine}>
              现在，开始探索
            </Typography>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.secondLine}>
              汪师傅心中的好朋友们
            </Typography>
          </div>


        </div>
      </Container>
    </React.Fragment>
  );
};


export default withRouter(FriendPage);