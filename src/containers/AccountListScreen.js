import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AccountList from "../components/Auth/AccountList";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList);