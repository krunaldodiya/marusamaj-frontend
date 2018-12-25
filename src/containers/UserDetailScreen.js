import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserDetail from "../components/UserDetail";
import { getGuestUser } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  guest: state.guest
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getGuestUser: getGuestUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
