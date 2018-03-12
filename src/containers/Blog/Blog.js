import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null,
        selectable: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 3);
                this.setState({
                    posts: posts
                })
            }).catch(error => console.log(error))
    }

    clickHandler = (i) => {
        this.setState({
            selectedId: i,
            selectable: true
        })
    }

    DeleteHandler = () => {
        axios.delete('/posts/'+this.state.selectedId)
        .then(response => {
            console.log(response);
        })
    }
    render() {
        const posts = this.state.posts.map((post, i) => {
            return <Post key={i} Title={post.title} Clicked={() => this.clickHandler(i)} />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost Posts={this.state.posts[this.state.selectedId]} 
                    Selectable={this.state.selectable}
                    DeletePost={this.DeleteHandler}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;