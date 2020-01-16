import React, {Component} from 'react';
import {getAllPosts} from '../../util/APIUtils';

class NewsInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
      page: 0,
      size: 10,
      totalElements: 0,
      totalPages: 0,
      last: true,
      isLoading: false
    };
    this.loadNewsList = this.loadNewsList.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }


  loadNewsList() {
    let promise = getAllPosts();
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise
        .then(response => {
          const news = this.state.news.slice();
          this.setState({
            news: news.concat(response),
            page: response.page,
            size: response.size,
            totalElements: response.totalElements,
            totalPages: response.totalPages,
            last: response.last,
            isLoading: false
          })
        }).catch(error => {
      this.setState({
        isLoading: false
      })
    });

  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.loadCurrentUser();
    }
    this.loadNewsList();
  }

  componentDidUpdate(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      // Reset State
      this.setState({
        posts: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0,
        last: true,
        currentVotes: [],
        isLoading: false
      });
      this.loadPostList();
    }
  }

  handleLoadMore() {
    this.loadPostList();
  }

  render() {
    return (
        <a/>
        // this.state.news.map( new => (
        //   <News news={new} {...this.props}/>
        // ));
    );
  }

}


export default NewsInfo;