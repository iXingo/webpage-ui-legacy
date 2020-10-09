import React from 'react';
import HeaderUnit from '../../components/HeaderUnit';
import SectionTitle from "../../components/SectionTitle/SectionTiltle";
// import AlignItemsList from '../../components/AlignItemsList';
// import Container from '@material-ui/core/Container';
// import PostCard from '../../components/PostCard';


const projects = [
  {
    "id": "7977556560889970688",
    "name": "合影计划",
    "description": "相见时难别亦难。此计划的目的是珍惜每一次相聚的时光，与汪师傅一起合影，一起留下相聚的难忘瞬间。",
    "pictureUrl": "https://img.ixingo.cn/undraw_photo_session_clqr.svg",
    "involveUrl": ""
  },
  {
    "id": "7977556887462674432",
    "name": "好友列传",
    "description": "加入该计划您将被收录到本站'好友'频道。'好友'频道旨在收录并记录汪师傅所在好友的相关信息。",
    "pictureUrl": "https://img.ixingo.cn/undraw_team_ih79.svg",
    "involveUrl": ""
  },
  {
    "id": "7977557261498122240",
    "name": "一声问候",
    "description": "加入该计划后您的邮件地址或者短信将在固定周期内（通常是一天）收到汪师傅的问候信息（目前是您当前所在位置的天气报告，后期将会根据实际情况提供更好的问候信息）",
    "pictureUrl": "https://img.ixingo.cn/undraw_weather_notification_4sbo.svg",
    "involveUrl": ""
  },
  {
    "id": "7977557270918529024",
    "name": "好友相聚",
    "description": "现在就预约和汪师傅一起聚餐喝茶，老友相聚。（汪师傅现在坐标上海， 当你出差或旅行时可以参加该计划，您将会收到汪师傅在上海的住址和联系信息。）",
    "pictureUrl": "https://img.ixingo.cn/undraw_special_event_4aj8.svg",
    "involveUrl": ""
  }
];

const Project = props => {

  const projectSection = {
    image: 'https://img.ixingo.cn/pic/undraw_maker_launch_crhe.svg',
    title: '🚀 计划',
    content: '在这个短暂的人生中，我们总想做很多的事情，但是真正能做到的能有多少呢。加入汪师傅的小小计划，留住生活中的感动瞬间。',
    linkUrl: '',
    linkText: '汪师傅',
  };

  document.title = "汪师傅的X计划 | 看见，好时光";
  return (
    <React.Fragment>
      <SectionTitle context={projectSection}/>
      {projects.map(project => (
        <HeaderUnit project={project} {...props} />
      ))
      }
    </React.Fragment>
  );
};


export default Project;
