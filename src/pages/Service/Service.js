import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
// import {Grid, IconButton, Typography} from '@material-ui/core';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {ProductCard, ProductsToolbar} from './components';
import mockData from './data';
import SectionTitle from "../../components/SectionTitle/SectionTiltle";
import TitleAction from "../../components/TitleAction";

const useStyles = makeStyles(theme => ({
  service: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Service = props => {

  const classes = useStyles();
  const [products] = useState(mockData);
  const serviceSection = {
    image: 'https://img.ixingo.cn/pic/undraw_operating_system_4lr6.svg',
    title: '🛵 服务',
    content: '结合汪师傅在编程， 图片处理， 视频制作方面的一点小小的兴趣，星狗网推出一系列服务，可以方便的实现你想要的效果。',
    linkUrl: '',
    linkText: '汪师傅',
  };

  document.title = "汪师傅提供的服务列表 | 看见，好时光";

  return (
    <div >
      <SectionTitle  context={serviceSection}/>
      <div className={classes.service}>

        <ProductsToolbar/>
        <div className={classes.content}>
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      <TitleAction/>

    </div>
  );
};

export default Service;
