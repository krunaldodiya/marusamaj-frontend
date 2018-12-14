import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Events from "../components/Tabs/Events";
import { toggleDrawer } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleDrawer: toggleDrawer
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
