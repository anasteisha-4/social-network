import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
