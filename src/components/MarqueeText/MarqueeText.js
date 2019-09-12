import Marquee from 'react-marquee';
import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    marque: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#3f51b5',
        height: theme.spacing(3),
        textAlign: 'center',
        justifyContent : 'center',
        height: 18
    }
  }));

const MarqueeText = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    return (
        <div className={classes.marque}>
          <Marquee  loop={true} hoverToStop={true} text="
           您当前登录的是星狗网。 星狗网是南京航空航天大学计算机科学与技术学院软件工程专业学生汪欣搭建的一个专注于资讯、娱乐、生活、心情技术分享新兴网络平台。
           您当前登录的是星狗网。 星狗网是南京航空航天大学计算机科学与技术学院软件工程专业学生汪欣搭建的一个专注于资讯、娱乐、生活、心情技术分享新兴网络平台。
          " />
        </div>
    );
}
export default MarqueeText;