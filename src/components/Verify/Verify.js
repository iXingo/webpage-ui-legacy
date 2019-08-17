import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    verified: {
        display: 'inline-block',
        backgroundImage: 'url(/images/icon/icon.png)',
        backgroundRepeat: 'no-repeat',
        width: 14,
        height: 14,
        verticalAlign: -2,
        backgroundPosition: '0 -75px',
    }
  }));

const Verify = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    return (
        <a target="_blank" href="//verified.weibo.com/verify">
            <i title="微博个人认证 " className={classes.verified}>
            </i>
        </a>
    );
}
export default Verify;