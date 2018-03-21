import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div>
                <header>
                    <ul className="Nav-bar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new-post">New Post</Link></li>
                    </ul>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                {/* <section>
                    <FullPost Posts={this.state.posts[this.state.selectedId]} 
                    Selectable={this.state.selectable} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;