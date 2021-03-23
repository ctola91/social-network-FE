import { useEffect } from 'react';
import { array, func } from 'prop-types';
import HomeListItem from './HomeListItem';

import './Home.css';

const Home = (props) => {
  const { posts, fetchPosts } = props;
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="Home">
      <h1>Publicaciones del dia</h1>
      <div>
        {posts.map((post) => (
          <HomeListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  posts: array,
  fetchPosts: func,
};

export default Home;
