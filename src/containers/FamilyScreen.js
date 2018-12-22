import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Family from "../components/Family";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Family);
