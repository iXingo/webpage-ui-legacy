import React, { Component } from 'react';
import { getPost } from '../../util/APIUtils';
import { PostBody, PostHead } from './Components';

class SinglePost extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            isLoading: false
        };
        this.loadPost = this.loadPost.bind(this);
    }


    loadPost(id) {
        let promise = getPost(id);
        if(!promise) {
            return;
        }
        this.setState({
            isLoading: true
        });
        promise            
        .then(response => {
            const post = this.state.post.slice();
            const postResponse = response;
            if (this._isMounted) {
            this.setState({
                post: post.concat(postResponse),
                isLoading: false
            })
        }
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        });  
        
    }

    componentDidMount() {
      this._isMounted = true;
      if(!this.props.isAuthenticated){
        this.props.loadCurrentUser();
      }
      const { match: { params } } = this.props;
      this.loadPost(params.id);
      
    }


    componentWillUnmount() {
        this._isMounted = false;
        console.log("Unmount");
    }


    componentDidUpdate(nextProps) {
        if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
            // Reset State
            this.setState({
                post: [],
                isLoading: false
            });    
            this.loadPost();
        }
    }

    render() {
        const {post} = this.state;
        const posts = [];
        post.map(postResponse => {
            posts.push(<PostBody post={postResponse} {...this.props}></PostBody>) 
        })
        return (
            <div>
            <PostHead></PostHead>
            {posts}
            </div> 
        );
    }
            
}



export default SinglePost;