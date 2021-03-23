import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPost, resetPostForm } from '../../actions/postActions';
import Create from './Create';

const mapStateToProps = ({ post }) => ({ post: post.selectedPost });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addPost,
      resetPostForm
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Create);
