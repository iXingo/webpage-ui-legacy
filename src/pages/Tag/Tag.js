import React, {Component} from 'react';
import {getAllPosts} from '../../util/APIUtils';
import TagPage from "./TagPage";
import {Instagram} from "react-content-loader";
import {Typography} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {ContentLoading} from "../../components";


class Tag extends Component {

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
    this.loadTagedTagedPostList = this.loadTagedPostList.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }


  loadTagedPostList() {
    this.setState({
      page: this.state.page + 1,
    });
    let promise = getAllPosts(this.state.page, this.state.size);
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
    this.loadTagedPostList();
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
      this.loadTagedPostList();
    }
  }

  handleLoadMore() {
    this.loadTagedPostList();
  }

  render() {
    if (this.state.posts.length === 0) return (
      <div>
        <Typography variant='h5'>
          <TagPage posts={this.state.posts} {...this.props}/>
          <ContentLoading/>
        </Typography>
        <Instagram/>
      </div>
    );
    return (
      <TagPage posts={this.state.posts} {...this.props}/>
    );
  }

}


export default withRouter(Tag);