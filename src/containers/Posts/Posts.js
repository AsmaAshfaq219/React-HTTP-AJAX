import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css';

export default class Posts extends Component {

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
            }).catch(error => console.log(error));
    }
    clickHandler = (i) => {
        this.setState({
            selectedId: i,
            selectable: true
        });
    }
    render() {
        const posts = this.state.posts.map((post, i) => {
            return <Post key={i} Title={post.title} Clicked={() => this.clickHandler(i)} />
        })
        return (
            <section className="Posts">
                {posts}
            </section>
        );

    }
}