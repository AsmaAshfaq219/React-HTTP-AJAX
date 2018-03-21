import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
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

    render() {
        return (
            <div>
                <header>
                    <ul className="Nav-bar">
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-post">New Post</NavLink></li>
                    </ul>
                </header>
                <Switch>
                    <Route path="/" exact render={() => <Posts PostsData={this.state.posts} />} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/:id' exact render={(props) =>
                        <FullPost {...props} PostsData={this.state.posts} />
                    } />
                </Switch>
            </div>
        );
    }
}

export default Blog;