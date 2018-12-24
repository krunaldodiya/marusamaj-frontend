import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageCaste from "../components/ManageCaste";
import { setAuthUser, updateAuthUser } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  castes: state.castes
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateAuthUser: updateAuthUser,
      setAuthUser: setAuthUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCaste);
