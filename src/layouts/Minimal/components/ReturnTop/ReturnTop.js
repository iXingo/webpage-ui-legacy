import React from 'react';
import {makeStyles} from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: '0 2px 6px 0 rgba(å0,0,0,.12), inset 0 -1px 0 0 #dadce0',
    backgroundColor: '#1a73e8'
  },
  returnToTop: {
    right: 40,
    bottom: 40,
    zIndex: 1100,
    position: 'fixed'
  },
  button : {
    height: 50,
    width: 50,
    backgroundColor: "#ddd"
  }
}));

const ReturnTop = props => {

  const classes = useStyles();
  const scrollToTop = ()=> {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className={classes.returnToTop} onClick={scrollToTop}>
      <IconButton className={classes.button} >
        <ArrowUpwardIcon color="secondary" />
      </IconButton>
    </div>
  );

};


export default ReturnTop;
