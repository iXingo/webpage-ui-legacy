import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BigImage, ContentTitle} from "../index";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px 0',
    }
}));



const ImageSection = props => {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ContentTitle context={props.context}/>
            <BigImage context={props.context}/>
        </div>

    );

}


export default ImageSection;