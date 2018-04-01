import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Post from '../../components/Post/Post';
//import { Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

export default class Posts extends Component {
    //alternative to Link
    postClickHandler = (id) => {
        this.props.history.push('/' + id);
    }

    render() {
        const posts = this.props.PostsData.map((post, i) => {
            return (
                // <Link key={i} to={'/' + i}>
                    <Post Title={post.title}
                    key={i}
                    Clicked={() => this.postClickHandler(i)} />
                // </Link>
            )
        })

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path='/:id' exact render={(props) =>
                <FullPost {...props} PostsData={this.props.PostsData} />
            } />
            </div>
        );
    }
}