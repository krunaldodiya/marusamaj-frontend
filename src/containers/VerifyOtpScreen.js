import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import VerifyOtp from "../components/Auth/VerifyOtp";
import { otpVerified, requestOtp, verifyOtp } from "../store/actions";

const mapStateToProps = state => ({
  session: state.session,
  otp: state.otp
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { verifyOtp: verifyOtp, requestOtp: requestOtp, otpVerified: otpVerified },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyOtp);
