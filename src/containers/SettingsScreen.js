import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Settings from "../components/Settings";
import { updateSettings } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateSettings: updateSettings
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
