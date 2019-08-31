import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
        root:{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        card: {
        maxWidth: 345,
        margin: 20,
        background: 'transparent',
        boxShadow: 'none',
        },
    })
);


const People = props => {
    const classes = useStyles();
    const { friend } = props;
    return (
        <div className ={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                <Grid container justify="center" alignItems="center" className={classes.avatar}>
                    <Avatar alt="Remy Sharp" src="/images/avatars/000_.png" className={classes.bigAvatar} />
                </Grid>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                        {friend.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
                        {friend.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                <Button size="small" color="primary">
                    查看
                </Button>
                <Button size="small" color="primary">
                    分享
                </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default People;