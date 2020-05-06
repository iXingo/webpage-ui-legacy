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

const techSection = {

  image: 'https://developer.android.google.cn/images/home/android-11-preview-hero.svg',
  title: '技术',
  content: '坦率地说，汪师傅从来不是在人群中技术拔尖的人，但是因为一些原因，汪师傅最终还是走上了技术这条不归路。夜半无人私语时，汪师傅师傅继续在这条道路上摸索前行。',
  linkUrl: '',
  linkText: '汪师傅',

};

const TechPage = props => {
  const classes = useStyles();
  return (
    <div className={classes}>
      <SectionTitle  context={techSection}/>
      <BigMediaCarcd posts={props.posts}/>
    </div>
  );
};

export default TechPage;