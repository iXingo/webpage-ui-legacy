import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '我的青春消亡史',
    imgPath:
      'http://localhost:3000/images/banner/banner.png',
  },
  {
    label: 'Python讲解',
    imgPath:
      'http://localhost:3000/images/banner/shanghai.png',
  },
  {
    label: '测试文章',
    imgPath:
      'http://localhost:3000/images/banner/shanghai2.png',
  },
  {
    label: '每个人',
    imgPath:
      'http://localhost:3000/images/banner/friends.png',
  },
  {
    label: '这实验室',
    imgPath:
      'http://localhost:3000/images/banner/apian.png',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    paddingBottom: 24,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 36,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#3f51b5',
    justifyContent: 'space-between'
  },
  img: {
    // height: 360,
    display: 'block',
    // maxWidth: 400,
    overflow: 'hidden',
    // width: '100%',
    width: '100%', 
    height: 'auto',
    maxWidth: '100%',
  },
  button: {
    width: 200,
    backgroundColor: '#3f51b5',
    color: 'white',
    height: '100%',
  }
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }
  function clickImg(){
    alert("这是一个图片！");
  }

  return (
    <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} onClick={clickImg}/>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper square elevation={0} className={classes.header}>
        <Typography style={{color: 'white'}}>{tutorialSteps[activeStep].label}</Typography>
        <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        className={classes.button}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} style={{color: 'white'}}>
            前进
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: 'white'}}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            后退
          </Button>
        }
      />
      </Paper>
      
    </div>
  );
}

export default Carousel;