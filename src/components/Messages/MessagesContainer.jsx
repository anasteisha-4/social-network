import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    state: state.messages,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText
})(Messages);
