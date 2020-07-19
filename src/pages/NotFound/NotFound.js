import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, IconButton, Typography} from '@material-ui/core';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: 100,
    textAlign: 'center'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingBototm: theme.spacing(2),
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    height: 400
  }
}));

const NotFound = props => {


  const {history} = props;
  const handleBack = () => {
    history.goBack();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentHeader}>
        <IconButton onClick={handleBack}>
          <ArrowBackIcon/>
        </IconButton>
      </div>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1">404: 你来到了知识的荒原</Typography>
            <Typography variant="subtitle2">您当前访问的页面不存在,您已经来到了一个未知的知识荒原。</Typography>
            <Typography variant="subtitle2">此页面从未被创建，或者已经被系统管理员汪师傅永久性或者临时性地删除/转移,
              您可以尝试联系汪师傅以获得关于此页面的更多详细帮助。</Typography>
            <img alt="Under development" className={classes.image}
                 src="https://img.ixingo.cn/undraw_page_not_found_su7k.svg"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(NotFound);
