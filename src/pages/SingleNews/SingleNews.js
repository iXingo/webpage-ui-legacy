import React, {Component} from 'react';
import {getNews} from '../../util/APIUtils';
import {NewsMain} from './Components';


class SingleNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: "",
      isLoading: false
    };
    this.loadNews = this.loadPost.bind(this);
  }


  loadNews(id) {
    let promise = getNews(id);
    let {history} = this.props;
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
      .then(response => {
        this.setState({
          post: response,
          isLoading: false
        });
        if (response.code === 400) {
          history.push("/not-found");
        }
        document.title = this.state.news.title + " | 星狗网";
      }).catch(error => {
      this.setState({
        isLoading: false
      });
      history.push("/not-found");
    });

  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.loadCurrentUser();
    }
    const {computedMatch: {params}} = this.props;
    this.loadNews(params.id);

  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        news: "",
        isLoading: false
      });
      const {computedMatch: {params}} = this.props;
      this.loadNews(params.id);
    }
  }

  render() {
    const {news} = this.state;
    return (
      <div>
        <NewsMain news={news} {...this.props}/>
      </div>
    );
  }

}


export default SingleNews;