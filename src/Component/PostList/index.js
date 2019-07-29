import React, { Component } from 'react';
import Post from '../Post';
import './index.css';
import { Button, Icon, notification } from 'antd';
import LoadingIndicator  from '../../common/LoadingIndicator';
import { getUserCreatedPosts, getAllPosts } from '../../util/APIUtils';

class PostList extends Component {

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


    loadPostList(page = 0, size = 30) {
        let promise;
        if(this.props.username) {
            if(this.props.type === 'USER_CREATED_POSTS') {
                promise = getUserCreatedPosts(this.props.username, page, size);
            } else if (this.props.type === 'GET_ALL_POSTS') {
                promise = getAllPosts();                               
            }
        } else {
            promise = getAllPosts();
        }

        if(!promise) {
            return;
        }

        this.setState({
            isLoading: true
        });

        promise            
        .then(response => {
            const posts = this.state.posts.slice();
            // const currentVotes = this.state.currentVotes.slice();

            this.setState({
                posts: posts.concat(response),
                page: response.page,
                size: response.size,
                totalElements: response.totalElements,
                totalPages: response.totalPages,
                last: response.last,
                // currentVotes: currentVotes.concat(Array(response.content.length).fill(null)),
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        });  
        
    }

    componentDidMount() {
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
        this.loadPostList(this.state.page + 1);
    }


    render() {

        const postViews = [];
        this.state.posts.forEach((post, postIndex) => {
            postViews.push(<Post 
                key={post.id} 
                post={post} />)            
        });

        return(
            <div className="container">
                <div className="row">
                {postViews}
                {
                    !this.state.isLoading && this.state.posts.length === 0 ? (
                        <div className="no-posts-found">
                            <span>No Posts Found.</span>
                        </div>    
                    ): null
                }  
                {
                    !this.state.isLoading && !this.state.last ? (
                        <div className="load-more-posts"> 
                            <Button type="dashed" onClick={this.handleLoadMore} disabled={this.state.isLoading}>
                                <Icon type="plus" /> Load more
                            </Button>
                        </div>): null
                }              
                {
                    this.state.isLoading ? 
                    <LoadingIndicator />: null                     
                }
                </div>
            </div>
        );
    }
}

export default PostList;


