import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { sendMessage } from '../../redux/messagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    state: state.messages
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage
  }),
  withAuthNavigate
)(Messages);
