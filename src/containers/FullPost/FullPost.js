import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        hasError: false
    }
    DeleteHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a valid Post!</p>;
        console.log(this.props)
        let postId = this.props.match.params.id;
        if (postId >= 0 & postId < this.props.PostsData.length) {
            post = (
                <div className="FullPost">
                    <h1>{this.props.PostsData[postId].title}</h1>
                    <p>{this.props.PostsData[postId].body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.DeleteHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;