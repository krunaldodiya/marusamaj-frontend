import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RequestOtp from "../components/RequestOtp";
import { handleOtpInput, requestOtp } from "../store/actions";

const mapStateToProps = state => ({
  session: state.session
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
)(RequestOtp);
