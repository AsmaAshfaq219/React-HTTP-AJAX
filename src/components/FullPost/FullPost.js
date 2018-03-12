import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.Selectable)
        post = (
            <div className="FullPost">
                <h1>{this.props.Posts.title}</h1>
                <p>{this.props.Posts.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.props.DeletePost}>Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;