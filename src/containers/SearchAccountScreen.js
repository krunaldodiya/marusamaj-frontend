import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchAccount from "../components/Auth/SearchAccount";

const mapStateToProps = state => ({
  guest: state.guest
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAccount);
