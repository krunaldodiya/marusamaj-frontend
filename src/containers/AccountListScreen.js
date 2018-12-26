import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AccountList from "../components/Auth/AccountList";
import { login, register, switchAccount } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login: login,
      register: register,
      switchAccount: switchAccount
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList);
