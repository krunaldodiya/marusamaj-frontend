import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageProfile from "../components/ManageProfile";
import { updateUserProfile } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  castes: state.castes
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateUserProfile: updateUserProfile
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProfile);
