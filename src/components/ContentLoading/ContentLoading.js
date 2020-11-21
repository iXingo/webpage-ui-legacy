import React from 'react';
import Loading from "react-loading-components";
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
 loading:{
   display:'flex',
   padding: 20
 }
}));



const ContentLoading = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.loading}>
        <Loading type='oval' width={18} height={18} fill='#f44242'/>
        请稍候～ 汪师傅正在为您马不停蹄地、疯狂地读取数据中...
      </div>
    </React.Fragment>
  );
};


export default ContentLoading;