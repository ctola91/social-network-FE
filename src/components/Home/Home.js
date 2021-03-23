// eslint-disable-next-line
import { array, bool, func, number } from 'prop-types';
import React, { Component } from 'react';

import HomeList from './HomeList';

import './Home.css';
import HomePagination from './HomePagination';

class Home extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts, isLoading, total } = this.props;
    return isLoading ? (
      <div className="Home">
        <h1>Cargando...</h1>
      </div>
    ) : (
      <div className="Home">
        <h1>Posts</h1>
        <HomeList posts={posts} total={total} />
        <HomePagination />
      </div>
    );
  }
}

Home.propTypes = {
  fetchPosts: func,
  posts: array,
  total: number,
  isLoading: bool,
};

export default Home;
