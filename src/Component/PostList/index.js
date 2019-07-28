import React, { Component } from 'react';
import Post from '../Post';

class PostList extends Component {
    render() {
        return(
            <div class="container">
                <div class="row">
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
            </div>
        );
    }
}

export default PostList;


