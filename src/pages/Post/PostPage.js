import React from 'react';
import BigMediaCarcd from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle";


const postSection = {
  image: 'https://img.ixingo.cn/pic/undraw_wall_post_83ul.svg',
  title: '📃 博文',
  content: '诚然，随着年纪的增长，烦恼也会随之增长，快乐和幸福感也随之减少。我们不得不独自面对残酷的现实和现实世界的纷纷扰扰。世界依旧是这个世界，我们却不是依旧的我们。悲欢离合，阴晴圆缺，在这个山长水远的人世间，砥砺前行。写一点感悟而已。',
  linkUrl: '',
  linkText: '汪师傅',
};

const PostPage = props => {
  return (
    <div>
      <SectionTitle  context={postSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default PostPage;