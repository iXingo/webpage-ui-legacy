import React from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {notification} from 'antd';
import {joinProject} from "../../util/APIUtils";


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const HeaderUnit = props => {

  const {project, history, currentUser} = props;
  const classes = useStyles();

  const join = (project) => {
    if (!currentUser) {
      notification.error({
        message: '星狗网 Web App',
        description: '您未登录！',
      });
      return;
    }
    joinProject(project.id).then(response =>
      notification.success({
        message: '星狗网 Web App',
        description: '祝贺！加入计划【' + project.name + '】成功！',
      })
    ).catch(error =>
      notification.error({
        message: '星狗网 Web App',
        description: '加入计划【' + project.id + '】失败！请联系 @程序员汪师傅',
      }))
  };

  const inspect = (project) => {
    history.push("/index");
    notification.success({
      message: '星狗网 Web App',
      description: '您正在查看【' + project.name + '】计划！但是我还没开发完成',
    });
  };

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {project.name}
          </Typography>
          <Typography variant="h5" align="center" color={"textSecondary"} paragraph>
            {project.description}
          </Typography>
          <img src={project.pictureUrl} alt={"星狗计划"}/>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="outlined" color="primary" onClick={() => inspect(project)}>
                  查看计划介绍
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => join(project)}>
                  加入该计划
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};


export default withRouter(HeaderUnit);
