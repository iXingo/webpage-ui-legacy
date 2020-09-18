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
    lineHeight: 1,
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
              在这里，机器学习与人工智能团队致力于为各款 Apple 产品打造不凡体验，帮助数百万人实现超乎想象的精彩。由于所有 Apple
              设备都非常注重软硬件的完全一体化，促使这个团队的研究人员与工程师更加高效地紧密协作，以提升用户体验并保护用户的数据。加入我们，通过你开发的产品和发表的研究成果，为世界带去你的影响力。
            </Typography>
          </div>


          <img src={"https://img.ixingo.cn/web/graduate.JPG"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.sectionTitle}>
              那些绝望的思绪，和那些希望的曙光。
            </Typography>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              为 Apple 的创新产品构建坚实基础。作为团队中的一员，你将与世界一流的研究人员交流与合作，利用顶尖计算、存储和分析工具解决机器学习领域中极具挑战性的难题。在
              Apple，你的团队可以在硬件、软件、算法等所有领域全面创新，一切机会尽在眼前。工作领域包括后端工程、数据科学、平台工程和系统工程。
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
              为 Apple 的创新产品构建坚实基础。作为团队中的一员，你将与世界一流的研究人员交流与合作，利用顶尖计算、存储和分析工具解决机器学习领域中极具挑战性的难题。在
              Apple，你的团队可以在硬件、软件、算法等所有领域全面创新，一切机会尽在眼前。工作领域包括后端工程、数据科学、平台工程和系统工程。
            </Typography>
            <Typography size="small" color="primary" className={classes.sectionLink}>
              <Link color="primary" component={RouterLink} to={'/index'} underline="hover"
                    variant="h5"> 进一步了解 →</Link>
            </Typography>
          </div>

          <img src={"https://img.ixingo.cn/web/sunrise.jpeg"} alt={'wangxin'} className={classes.image}/>
          <div className={classes.text}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.sectionTitle}>
              那些绝望的思绪，和那些希望的曙光。
            </Typography>
            <Typography variant="caption" gutterBottom color="inherit" align="center"
                        className={classes.sectionContent}>
              为 Apple 的创新产品构建坚实基础。作为团队中的一员，你将与世界一流的研究人员交流与合作，利用顶尖计算、存储和分析工具解决机器学习领域中极具挑战性的难题。在
              Apple，你的团队可以在硬件、软件、算法等所有领域全面创新，一切机会尽在眼前。工作领域包括后端工程、数据科学、平台工程和系统工程。
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
                与远见卓识的你一起在生活中勇攀高峰。
              </div>
              <div className={classes.content}>
              为 Apple 的创新产品构建坚实基础。作为团队中的一员，你将与世界一流的研究人员交流与合作，利用顶尖计算、存储和分析工具解决机器学习领域中极具挑战性的难题。在 Apple，你的团队可以在硬件、软件、算法等所有领域全面创新，一切机会尽在眼前。工作领域包括后端工程、数据科学、平台工程和系统工程。
              </div>
            </span>
          </div>

          {/*<div style={{position: 'relative', width: '100%'}}>*/}
          {/*  <img src={"https://img.ixingo.cn/web/suzhou.jpeg"} alt={''}/>*/}
          {/*  <span className={classes.float}>*/}
          {/*    <div className={classes.title}>*/}
          {/*      与远见卓识的你一起在生活中勇攀高峰。*/}
          {/*    </div>*/}
          {/*    <div className={classes.content}>*/}
          {/*    为 Apple 的创新产品构建坚实基础。作为团队中的一员，你将与世界一流的研究人员交流与合作，利用顶尖计算、存储和分析工具解决机器学习领域中极具挑战性的难题。在 Apple，你的团队可以在硬件、软件、算法等所有领域全面创新，一切机会尽在眼前。工作领域包括后端工程、数据科学、平台工程和系统工程。*/}
          {/*    </div>*/}
          {/*  </span>*/}
          {/*</div>*/}


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
              开始探索
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