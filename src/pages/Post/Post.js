import React, { Component } from 'react';
import { getAllPosts } from '../../util/APIUtils';
import PostContent from './PostContent';

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
        let promise = getAllPosts();
        if(!promise) {
            return;
        }
        this.setState({
            isLoading: true
        });
        promise            
        .then(response => {
            const posts = this.state.posts.slice();
            this.setState({
                posts: posts.concat(response),
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
      if(!this.props.isAuthenticated){
        this.props.loadCurrentUser();
      }
      this.loadPostList();
    }

    componentDidUpdate(nextProps) {
        if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
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
            this.state.posts.map(post => (
              <PostContent post={post} {...this.props}></PostContent>         
            ))
        );
    }
            
}



export default Post;