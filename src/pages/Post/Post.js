import React, {Component} from 'react';
import {getAllPosts} from '../../util/APIUtils';
import PostPage from "./PostPage";
class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 0,
      size: 10,
      totalElements: 0,
      totalPages: 0,
      last: true,
      isLoading: false
    };
    this.loadPostList = this.loadPostList.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }


  loadPostList() {
    this.setState({
      page: this.state.page + 1,
    });
    let promise = getAllPosts(this.state.page,this.state.size);
    if (!promise) {
      return;
    }
    this.setState({
      isLoading: true
    });
    promise.then(response => {
      const posts = this.state.posts.slice();
      this.setState({
        posts: posts.concat(response.data.content),
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
    this.loadPostList();
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
        <PostPage posts={this.state.posts} {...this.props}/>
    );
  }

}


export default Post;