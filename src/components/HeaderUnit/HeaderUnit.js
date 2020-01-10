import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { notification } from 'antd';



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

    const { project, history } = props;
    const classes = useStyles();

    const joinProject = (name) => {
      const notificationType="success";
      notification[notificationType]({
        message: '星狗网 Web App',
        description: '加入计划'+ name +'成功！',
      });
    };

    const inspectProject = (name) => {
      const notificationType="success";
      history.push("/index");
      notification[notificationType]({
        message: '星狗网 Web App',
        description: '正在查看'+ name,
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
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => joinProject(project.name)}>
                    加入该计划
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={() => inspectProject(project.name)}>
                    查看计划介绍
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
