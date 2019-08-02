import React, { Component } from 'react';
import { getAllPosts } from '../../util/APIUtils';
// import Markdown from '../../util/Markdown';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from "./CodeBlock";



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
        let promise = getAllPosts();;
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
                <ReactMarkdown source={post.content}  renderers={{ code: CodeBlock }} key={post.id}/>                
            ))
        );
    }
            
}



export default Post;