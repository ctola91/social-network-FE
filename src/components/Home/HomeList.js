import { array, number } from 'prop-types';

import HomeListItem from './HomeListItem';

import './HomeList.css';

const HomeList = ({ posts, total }) => (
  <>
    {total === 0 ? (
      <div>No hay posts disponibles.</div>
    ) : (
      <div className="HomeList">
        {posts.map((post) => (
          <HomeListItem key={post.id} post={post} />
        ))}
      </div>
    )}
  </>
);

HomeList.propTypes = {
  posts: array,
  total: number,
};

export default HomeList;
