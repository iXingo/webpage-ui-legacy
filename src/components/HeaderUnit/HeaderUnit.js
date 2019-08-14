import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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



export default function HeaderUnit() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              合影计划
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              相见时难别亦难。
              此计划的目的是珍惜每一次相聚的时光，与汪师傅一起合影，一起留下相聚的难忘瞬间。
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    加入该计划
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    查看计划介绍
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
}
