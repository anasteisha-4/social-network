import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    state: state.messages
  };
};

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText
})(Messages);

export default MessagesContainer;
