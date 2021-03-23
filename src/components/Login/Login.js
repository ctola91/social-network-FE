import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { doLogin } from '../../actions/authActions';
import Login from './Login';

const mapStateToProps = ({ auth }) => ({ user: auth.user, token: auth.token });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      doLogin,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
