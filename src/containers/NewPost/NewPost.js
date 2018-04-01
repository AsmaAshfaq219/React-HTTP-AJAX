import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    addNewPostHandler = () => {
        const data = {
            ...this.state
        };
        axios.post('/posts', data)
            .then(response => {
                alert('Your data has been Posted');
                console.log(response);
                this.props.history.push('/'); // Push new page on to stack
                //this.props.history.replace('/'); An alternate that replaces the page instead.
            }
            ).catch(error => console.log('There seems to be an error'))
    }
    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addNewPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;