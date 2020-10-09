import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BigImage} from "../index";
import TitleContent from "../TitleContent";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '20px 0',
  },
  image: {
    padding: '0 200px'
  }
}));


const ImageSection = props => {


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TitleContent context={props.context}/>
      <BigImage context={props.context} className={classes.image}/>
    </div>

  );

}


export default ImageSection;