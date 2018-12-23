import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tabs from "../components/Tabs";
import { getUsers, logout, toggleDrawer } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users,
  drawer: state.drawer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUsers: getUsers,
      toggleDrawer: toggleDrawer,
      logout: logout
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
