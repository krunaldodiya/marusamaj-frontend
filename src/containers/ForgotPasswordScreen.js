import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ForgotPassword from "../components/Auth/ForgotPassword";

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
