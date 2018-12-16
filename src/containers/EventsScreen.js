import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Events from "../components/Tabs/Events";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
