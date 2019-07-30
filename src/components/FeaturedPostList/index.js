import React, { Component } from 'react';
import FeaturedPost from '../FeaturedPost';

class FeaturedPostList extends Component {
    render() {
        return(
            <div className="container">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <FeaturedPost></FeaturedPost>
                        <FeaturedPost></FeaturedPost>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedPostList;