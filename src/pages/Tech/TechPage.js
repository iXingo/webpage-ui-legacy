import React from 'react';
import BigMediaCarcd from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle/SectionTiltle";


const techSection = {

  image: 'https://img.ixingo.cn/pic/undraw_programmer_imem.svg',
  title: '🧑‍💻 技术',
  content: '坦率地说，汪师傅从来不是在人群中技术拔尖的人，但是因为一些原因，汪师傅最终还是走上了技术这条不归路。夜半无人私语时，汪师傅师傅继续在这条道路上摸索前行。',
  linkUrl: '',
  linkText: '汪师傅',

};

const TechPage = props => {
  return (
    <div>
      <SectionTitle  context={techSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default TechPage;