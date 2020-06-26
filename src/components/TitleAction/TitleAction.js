import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    heroContent: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    }
}));


const TitleAction = props => {

    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                     个性化服务
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    找不到你需要的服务？ 没关系， 通过直接联系汪师傅，获得关于您个性化服务需求的进一步帮助。
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                关于您的个性化服务
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                直接联系
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}


export default TitleAction;