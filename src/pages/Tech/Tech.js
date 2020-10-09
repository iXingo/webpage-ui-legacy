import React, {Component} from 'react';
import {getAllTechPosts} from '../../util/APIUtils';
import TechPage from "./TechPage";
import {Instagram} from "react-content-loader";
import Loading from 'react-loading-components';
import {Typography} from "@material-ui/core";
import {withRouter} from "react-router-dom";


class Tech extends Component {

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
    let promise = getAllTechPosts(this.state.page, this.state.size);
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
    if (this.state.posts.length === 0) return (
      <div>
        <Typography variant='h5'>
          <TechPage posts={this.state.posts} {...this.props}/>
          <Loading type='oval' width={18} height={18} fill='#f44242'/>请稍候～ 汪师傅正在为您马不停蹄地、疯狂地读取数据中...
        </Typography>
        <Instagram/>
      </div>
    );
    return (
      <TechPage posts={this.state.posts} {...this.props}/>
    );
  }

}


export default withRouter(Tech);