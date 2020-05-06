import React from 'react';
import {makeStyles} from '@material-ui/styles';
import palette from '../../theme/palette';
import BigMediaCarcd from "../../components/MediaCard";
import SectionTitle from "../../components/SectionTitle/SectionTiltle";


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

const courseSection = {

  image: 'https://developer.android.google.cn/images/home/android-11-preview-hero.svg',
  title: '皎皎空中孤月轮，汪欣教你学编程。',
  content: '借助计算机程序，我们能够轻松完成一些有趣的事情，但是有的时候计算机程序的编写和学习却不轻松。在这里，汪师傅将和你一起，尝试将这一切变的稍微轻松一些。',
  linkUrl: '',
  linkText: '汪师傅',

};

const CoursePage = props => {
  const classes = useStyles();
  return (
    <div className={classes}>
      <SectionTitle  context={courseSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default CoursePage;