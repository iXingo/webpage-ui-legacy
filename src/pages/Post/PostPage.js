import React from 'react';
import {makeStyles} from '@material-ui/styles';
import palette from '../../theme/palette';
import BigMediaCarcd from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle";


const useStyles = makeStyles(theme => ({
  h1: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px'
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px'
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px'
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px'
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px'
  },
  subtitle2: {
    color: palette.text.secondary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body1: {
    color: palette.text.primary,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px'
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px'
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }

}));


const goodSection = {
  sectionMain: '加油，汪师傅',
  sectionTitle: '问君能有几多愁，今年汪欣要加油。',
  sectionContent: '时间的车轮无情地把我们带进2020时代。2020，一个在小学作文中曾被认为是未来的一年，如今却已经正式走进现实，这一年，汪师傅，加油鸭！',

  image: 'https://developer.android.google.cn/images/home/android-11-preview-hero.svg',
  title: '加油! 汪师傅！',
  content: '诚然，随着年纪的增长，烦恼也会随之增长，快乐和幸福感也随之减少。我们不得不独自面对残酷的现实和现实世界的纷纷扰扰。世界依旧是这个世界，我们却不是依旧的我们。悲欢离合，阴晴圆缺，在这个山长水远的人世间，砥砺前行。',
  linkUrl: '',
  linkText: '汪师傅',

};

const PostPage = props => {
  const classes = useStyles();
  return (
    <div className={classes}>
      <SectionTitle  context={goodSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default PostPage;