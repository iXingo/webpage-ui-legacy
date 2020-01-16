const MainFeaturedPost = props => {
  return (
      <Paper className={classes.mainFeaturedPost}>
        {/* Increase the priority of the hero background image */}
        {
          <img
              style={{display: 'none'}}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
          />
        }
        <div className={classes.overlay}/>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                星狗网（再一次）正式上线
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                2013年注册第一个域名，申请的第一个主机，配置第一个WordPress程序开始，就一直想从前端和后端搭建写一个博客。
                这些年折折腾腾，也没搞出来，当然也没写出什么有意思的东西。
                今天，我再次出发，在这个网站（再次）开始我的博客生涯，头也不回的开始我的程序人生。
              </Typography>
              <Link variant="subtitle1" href="#">
                查看全文...
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
  );
};


export default MainFeaturedPost;