import React, { Component } from 'react';
import { formatDateTime } from '../../util/Helpers';


class Post extends Component {

    getTimeRemaining = (poll) => {
        const expirationTime = new Date(poll.expirationDateTime).getTime();
        const currentTime = new Date().getTime();
    
        var difference_ms = expirationTime - currentTime;
        var seconds = Math.floor( (difference_ms/1000) % 60 );
        var minutes = Math.floor( (difference_ms/1000/60) % 60 );
        var hours = Math.floor( (difference_ms/(1000*60*60)) % 24 );
        var days = Math.floor( difference_ms/(1000*60*60*24) );
    
        let timeRemaining;
    
        if(days > 0) {
            timeRemaining = days + " days left";
        } else if (hours > 0) {
            timeRemaining = hours + " hours left";
        } else if (minutes > 0) {
            timeRemaining = minutes + " minutes left";
        } else if(seconds > 0) {
            timeRemaining = seconds + " seconds left";
        } else {
            timeRemaining = "less than a second left";
        }
        
        return timeRemaining;
    }


    render() {
        return(
            <div class="card mb-4">
                <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                <div class="card-body">
                    <h2 class="card-title">{this.props.post.title}</h2>
                    <p class="card-text">{this.props.post.summary}</p>
                    <a href="#" class="btn btn-primary">Read More →</a>
                </div>
                <div class="card-footer text-muted">
                {formatDateTime(this.props.post.creationDateTime)} by
                    <a href="#">{this.props.post.createdBy.name.toUpperCase()}</a>
                </div>
            </div>
        );
    }
}

export default Post;