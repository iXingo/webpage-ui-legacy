import React, { Component } from 'react';
import { getPost } from '../../util/APIUtils';
import { PostMain } from './Components';


class SinglePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: "",
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
            this.setState({
                post: response,
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
      const { computedMatch: { params } } = this.props;
      this.loadPost(params.id);
      
    }

    componentDidUpdate(nextProps) {
        if(this.props.isAuthenticated !== nextProps.isAuthenticated) {
            // Reset State
            this.setState({
                post: "",
                isLoading: false
            });    
            const { computedMatch: { params } } = this.props;
            this.loadPost(params.id);
        }
    }

    render() {
        const {post} = this.state;
        return (
            <div>
            <PostMain post={post} {...this.props}></PostMain>
            </div> 
        );
    }
            
}



export default SinglePost;