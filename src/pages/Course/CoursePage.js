import React from 'react';
import BigMediaCard from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle/SectionTiltle";


const courseSection = {

  image: 'https://img.ixingo.cn/pic/undraw_features_overview_jg7a.svg',
  title: '👨‍🏫 教程',
  content: '借助计算机程序，我们能够轻松完成一些有趣的事情，但是有的时候计算机程序的编写和学习却不轻松。在这里，汪师傅将和你一起，尝试将这一切变的稍微轻松一些。',
  linkUrl: '',
  linkText: '汪师傅',

};

const CoursePage = props => {

  document.title = "和汪师傅一起学编程 | 看见，好时光";

  return (
    <div>
      <SectionTitle context={courseSection}/>
      <BigMediaCard posts={props.posts}/>
    </div>
  );
};

export default CoursePage;