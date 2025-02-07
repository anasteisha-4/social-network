import { connect } from 'react-redux';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    state: state.messages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText(text) {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage() {
      dispatch(sendMessageActionCreator());
    }
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
