import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Search from "../components/Search";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
