import React from 'react';
import {makeStyles} from '@material-ui/styles';
import SectionTitle from "../../../../components/SectionTitle";
import {TitleContent} from "../../../../components";

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 0 50%',
      width: 1200,
      transform: 'translateX(-50%)'
    },
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const WindowsService = props => {

  const classes = useStyles();
  const serviceSection = {
    image: 'https://img.ixingo.cn/pic/undraw_operating_system_4lr6.svg',
    title: '🛵 服务',
    content: '结合汪师傅在编程， 图片处理， 视频制作方面的一点小小的兴趣，星狗网推出一系列服务，可以方便的实现你想要的效果。',
    linkUrl: '',
    linkText: '汪师傅',
  };
  const title = {
    sectionTitle: '在您熟悉的平台上运行您自己的应用。',
    sectionContent: '您最熟悉的Windows平台上，我们通过编程解放您最繁琐的需求。这些小程序可以通过自动化流程将您从一些频繁处理的工作流程中解放出来。',
  };

  document.title = "汪师傅提供的服务列表 | 看见，好时光";

  return (
      <div >
        <img src={'https://img.ixingo.cn/pic/hero-circuit-bg.svg'} alt={'Developer'} className={classes.image}/>
        <SectionTitle  context={serviceSection}/>
        <TitleContent context={title}/>

      </div>
  );
};

export default WindowsService;
