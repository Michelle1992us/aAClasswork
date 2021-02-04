import { connect } from 'react-redux';
//session action we'll need to create user
import { createNewUser } from '../../actions/session';
//create a quick skeleton for it since the complete file isn't made yet
import Signup from './signup';

//pass down action to sign up a user
const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

//null b/c no mapStateProp (none needed)
export default connect(null, mapDispatchToProps)(Signup);
