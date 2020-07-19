import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import TypeWriter from 'react-typewriter';
import Slide from '@material-ui/core/Slide';
import {
  ButtonPictureContent,
  CardPicture,
  PictureContentLine,
  PictureItems,
  PicturePicture,
  PictureText,
  PictureTextLink,
  SignedIn,
  TextPicture
} from '../../components';


const useStyles = makeStyles(theme => ({
  main: {
    background: 'url(https://github.githubassets.com/images/modules/site/heroes/simple-codelines.svg), #2b3137',
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
    padding: '210px 10px 120px'
  },
  website: {
    fontSize: 48,
    color: 'white',
    // padding: 10,
    lineHeight: 1.5,
  },
  firstLine: {
    fontSize: 30,
    color: '#1a73e8',
    // padding: 10,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 16,
    margin: 'auto',
    paddingTop: 20,
    lineHeight: 1.5,
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 14,
    paddingTop: 80,
    lineHeight: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tipsLine: {
    fontSize: 12,
    paddingTop: 16,
    lineHeight: 1.5,
    color: "grey",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  svgIcon: {
    height: 30,
    width: 30
  }

}));


const contributionSection = {
  sectionMain: '星狗网正在开发测试中',
  sectionTitle: '小楼昨夜又东风，本站开发测试中。',
  sectionContent: '所有内容和功能正在不断变化中，欢迎提供意见和建议。',

  image: 'https://img.ixingo.cn/undraw_new_decade_n4qd.svg',
  textTitle: '星狗网的前世与今生',
  textContent: '2013年的暑期，汪师傅注册了第一个域名"wangxin.ml"(因为.ml与.cf是免费注册的域名服务)，并且在主机屋（免费使用的网站托管服务）使用Wordpress（一个基于PHP开发的全球流行的建站程序）搭建了星狗网的第一个版本',
  linkUrl: '',
  linkText: '进一步了解星狗网的故事',
};


const newsSection = {
  sectionMain: '一个平凡人的新闻',
  sectionTitle: '东风未肯入东门，看看今天啥新闻。',
  sectionContent: '总有一个记忆让我们铭记于心，总有一种力量让我们泪流满面。回顾过去，一起重温那些令人动容的瞬间；展望未来，我们将走得更加铿锵有力。小人物大力量，跟着小人物汪师傅，看看他眼里的大新闻。',

  linkUrl: '/news',
  linkText: '星狗新闻',

  image: 'https://img.ixingo.cn/undraw_steps_ngvm.svg',

  titleOne: '分享生活，留住感动',
  contentOne: '汪师傅平淡的生活现在更以新闻显示。',

  titleTwo: '随时随地分享身边的新鲜事儿',
  contentTwo: '寻常巷陌的新闻，绘声绘色地讲述。',

  titleThree: '我们的精神角落',
  contentThree: '平凡的生活里有不凡的角落。',

};

const blogSection = {
  sectionMain: '一年又一年',
  sectionTitle: '年年岁岁花相似，岁岁年年人不同。',
  sectionContent: '人生天地之间，若白驹之过郤，忽然而已。',

  imageLeft: 'https://img.ixingo.cn/wangxin2019.png',
  titleLeft: '2020， 新一年。',
  contentLeft: '2020年元旦新年，汪师傅分别前往苏州、杭州会晤大学好友Jacob Zhang，Simon Shi以及Justin Qian，共庆新年  ',
  linkUrlLeft: 'post/7933372302976811008',
  linkTextLeft: '与汪师傅一起开启 2020',

  imageRight: 'https://img.ixingo.cn/masterwang2019.png',
  titleRight: '上海， 这一年。',
  contentRight: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。 ',
  linkUrlRight: 'post/7866307276669779968',
  linkTextRight: '与汪师傅一起回顾 2019',
};

const planSection = {
  sectionMain: '汪师傅的New Plan(破烂)',
  sectionTitle: '春风又绿江南岸， 新年搞点新方案。',
  sectionContent: '“你呀，总是能给我出点新花样。”  ----摘选自电视剧《亮剑》楚云飞台词',

  image: 'https://img.ixingo.cn/moments_0y20.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '计划代号：9527【完成星狗网】',
  contentOne: '完成星狗网前后端的编写。今年第一个计划就是填坑，年前学习了React主要就是完成这个博客，但是发现前端写好真的很难，而且学完React发现对SEO不太友好，但是发现现在百度也可以解析React，所以暂时服务端渲染的事情就不管了，先把这主要的几个模块写完。（前端真的不好写）',

  titleTwo: '计划代号：007【加一些有趣的内容】',
  contentTwo: '其实我还是想做一个技术博主的，但是突然冒出来一个写一写好友故事的奇怪想法，所以把这个也提上日程，写一写平凡的故事。（希望不要写成流水账）其实作为一个资深学渣，写一些严谨的技术架构，算法仿佛对我有些遥远，不希望编程别人博客的搬运工，所以还是准备写一些简单但是有趣的技术文章。（希望最后不要变得复杂又无趣）',

};

const selfSection = {
  sectionMain: '我们终将成为社会人',
  sectionTitle: '小猪佩奇身上纹，汪欣也成社会人。',
  sectionContent: '玩归玩，闹归闹，别拿汪师傅开玩笑。',

  image: 'https://img.ixingo.cn/peiqi.png',
  title: '社会人，汪师傅。',
  content: '汪欣（Shawn Wang），汪师傅，男，汉族，安徽六安人，2018年4月参加工作，是一名程序员，研究生，党员；现就职于NVIDIA中国，从事软件研发工作。\n' +
      '简单概括一下汪师傅的生平就是：生于安徽，求学江苏，搬砖上海。',
  linkUrl: '/about-me',
  linkText: '关于社会人汪师傅',
};

const friendSection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '今日不与旧时同，陈年好友情更浓。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',

  image: 'https://img.ixingo.cn/wangxin2019.png',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

};


const goodSection = {
  sectionMain: '加油，汪师傅',
  sectionTitle: '问君能有几多愁，今年汪欣要加油。',
  sectionContent: '时间的车轮无情地把我们带进2020时代。2020，一个在小学作文中曾被认为是未来的一年，如今却已经正式走进现实，这一年，汪师傅，加油鸭！',

  image: 'https://img.ixingo.cn/feeling_proud_qne1.svg',
  title: '加油! 汪师傅！',
  content: '诚然，随着年纪的增长，烦恼也会随之增长，快乐和幸福感也随之减少。我们不得不独自面对残酷的现实和现实世界的纷纷扰扰。世界依旧是这个世界，我们却不是依旧的我们。悲欢离合，阴晴圆缺，在这个山长水远的人世间，砥砺前行。',
  linkUrl: '',
  linkText: '汪师傅',

};

const programmerSection = {
  sectionMain: '一些有趣简单的代码程序',
  sectionTitle: '皎皎空中孤月轮，汪欣教你学编程。',
  sectionContent: '借助计算机程序，我们能够轻松完成一些有趣的事情，但是有的时候计算机程序的编写和学习却不轻松。在这里，汪师傅将和你一起，尝试将这一切变的稍微轻松一些。',

  image: 'https://img.ixingo.cn/undraw_code_review_l1q9.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '/courses',
  linkText: '汪师傅的程序小课堂',

  titleOne: 'Python程序',
  contentOne: '汪师傅会使用简单流行的Python语言如何处理微博、微信、电子邮件、Office等日常生活工作中的应用为你打开学习计算机程序的大门。',

  titleTwo: 'Web程序',
  contentTwo: '汪师傅从域名注册、域名解析、HTTPS证书、Web服务器设置、开源建站程序（或者Java+Javascript自助设计Web程序）、开源API、云服务以及面向云应用等全流程为你介绍Web应用开发、部署与运维过程。',

};


const studySection = {
  sectionMain: '学习新知识',
  sectionTitle: '夜半无人私语时，一起研究线程池。',
  sectionContent: '坦率地说，汪师傅从来不是在人群中技术拔尖的人，但是因为一些原因，汪师傅最终还是走上了技术这条不归路。夜半无人私语时，汪师傅师傅继续在这条道路上摸索前行。',

  image: 'https://img.ixingo.cn/undraw_hacker_mind_6y85.svg',
  title: '上海， 这一年。',
  textContent: '小的时候你会很难想象你未来将从事的事业，平凡的汪师傅亦是如此。“一个人的命运啊，当然要靠自我奋斗，但是也要考虑到历史的行程”。历史的行程把我带进了计算机软件开发的行业，但是在历史的车轮缓缓碾过时，我还想留下小小的辙痕。在这里，我还想了解的再多一些。',
  linkText: '汪师傅的技术日记',
  linkUrl: '/tech'
};

// const endSection = {
//   sectionMain: '一些有趣简单的代码程序',
//   sectionTitle: '一曲肝肠断， 天涯何处觅知音',
//   sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',
//
//   image: 'https://img.ixingo.cn/undraw_code_review_l1q9.svg'
//
// };

const signin = {
  sectionMain: '登录/注册, 与汪师傅分享你的知识与见闻',
  sectionTitle: '登录/注册， 岂不美哉？',
  sectionContent: '来都来了，为什么不顺势注册一波呢? 帅/好看的人都已经注册了, 而丑的人还正在犹豫...'
}


const SvgIcon = () => {
  return (
      <svg style={{width: 20, height: 20}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <path
            d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z"
            fill="currentColor" fillRule="evenodd"/>
      </svg>
  );
};


const Home = props => {

  // const { currentUser } = props;
  const classes = useStyles();

  // if(!currentUser){
  //   return <NotAuth />;
  // }

  return (
      <React.Fragment>
        <CssBaseline/>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={800}>
          <Container className={classes.main}>
            {/*<div className={classes.main}>*/}
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.website}>
              星狗网
            </Typography>
            <Typography variant="h1" gutterBottom color="primary" align="center" className={classes.firstLine}>
              程序人生的寂静欢喜。
            </Typography>
            <TypeWriter typing={1}>
              <Typography variant="subtitle1" gutterBottom color="inherit" align="center"
                          className={classes.secondLine}>
                车马很慢，书信很远。汪师傅，一个（伪）文艺派程序员，在这个漫长而复杂的人生做一些短暂简单，且微不足道的思考。
              </Typography>
            </TypeWriter>
            <Typography variant="h4" gutterBottom color="primary" align="center" className={classes.thirdLine}>
              <SvgIcon/> 与其在别处仰望， 不如在这里并肩。
            </Typography>
            {/*</div>*/}
          </Container>
        </Slide>
        <Typography variant="h4" gutterBottom color="primary" align="center" className={classes.tipsLine}>
          ↓ 向下滑动以继续浏览
        </Typography>
        <PictureTextLink context={contributionSection} {...props}  />
        <PictureItems context={newsSection} {...props} />
        <PicturePicture context={blogSection} {...props} />
        <CardPicture context={planSection} {...props}  />
        <PictureText context={selfSection} {...props} />
        <PictureContentLine context={friendSection} {...props}  />
        <TextPicture context={goodSection} {...props} />
        <ButtonPictureContent context={programmerSection} {...props}  />
        <PictureTextLink context={studySection} {...props}  />
        {/*<BigImage context={endSection} {...props}  />*/}
        <SignedIn context={signin} {...props} />
      </React.Fragment>
  );
};


export default withRouter(Home);