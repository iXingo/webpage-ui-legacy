import React from 'react';
import BigMediaCarcd from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle";


const postSection = {
  image: 'https://img.ixingo.cn/pic/undraw_wall_post_83ul.svg',
  title: '📃 标签文章',
  content: '',
  linkUrl: '',
  linkText: '汪师傅',
};

const TagPage = props => {

  document.title = "汪师傅的生活日常 | 看见，好时光";

  return (
    <div>
      <SectionTitle  context={postSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default TagPage;