import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/Home";
import { getUsers, toggleDrawer } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users,
  drawer: state.drawer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUsers: getUsers,
      toggleDrawer: toggleDrawer
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
