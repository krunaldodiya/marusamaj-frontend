import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/Home";
import { getUsers } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUsers: getUsers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
