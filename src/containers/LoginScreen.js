import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "../components/Auth/Login";
import { handleOtpInput, requestOtp } from "../store/actions";

const mapStateToProps = state => ({
  guest: state.guest
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { handleOtpInput: handleOtpInput, requestOtp: requestOtp },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
