import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsIndex from './post_index';
import PostsNew from './post_new';
import PostsShow from './posts_show';

export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
        <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
        </Switch>
     </BrowserRouter>
    );
  }
}
