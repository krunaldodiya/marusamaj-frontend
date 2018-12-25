import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "../components/Avatar";
import { changeAvatar } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  guest: state.guest
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeAvatar: changeAvatar
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
