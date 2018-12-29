import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "../components/Main";

const mapStateToProps = state => ({
  auth: state.auth,
  init: state.init
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
