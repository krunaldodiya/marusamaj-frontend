import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ResetPassword from "../components/Auth/ResetPassword";

const mapStateToProps = state => ({
  guest: state.guest
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
