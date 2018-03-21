import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import './Posts.css';

export default class Posts extends Component {
    render() {
        const posts = this.props.PostsData.map((post, i) => {
            console.log(post.id);
            return (
                <Link key={i} to={'/' + i}>
                    <Post Title={post.title} />
                </Link>
            )
        })

        return (
            <section className="Posts">
                {posts}
            </section>
        );

    }
}