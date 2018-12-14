import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageProfile from "../components/ManageProfile";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProfile);
