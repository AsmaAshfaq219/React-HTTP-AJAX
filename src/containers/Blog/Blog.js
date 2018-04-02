import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';
import AsyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const AsyncNewPost = AsyncComponent(() => import('../NewPost/NewPost'));
//import() will only be executed when AsynNewPost is mounted as we are using componentDidMount in hoc;

class Blog extends Component {

    state = {
        posts: [],
        auth: true
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
                    {/*Navigation Guards can be managed like this*/}
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    {/* <Route path='/new-post' component={NewPost} /> */}

                    {/* <Route render={() => <h1>Not Found</h1> } /> //if the route entered is unknown*/}

                    <Route path='/' render={(props) => <Posts {...props} PostsData={this.state.posts} />} />
                    <Redirect from='/posts' to='/' />  Just for practice purpose
                </Switch>
                
            </div>
        );
    }
}

export default Blog;