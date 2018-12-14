import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ManageCaste from "../components/ManageCaste";

const mapStateToProps = state => ({
  auth: state.auth,
  castes: state.castes
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCaste);
