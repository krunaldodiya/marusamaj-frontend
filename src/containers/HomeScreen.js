import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../components/Tabs/Home";
import { toggleDrawer, loadQuiz } from "../store/actions";

const mapStateToProps = state => ({
  auth: state.auth,
  drawer: state.drawer,
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleDrawer: toggleDrawer,
      loadQuiz: loadQuiz
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
