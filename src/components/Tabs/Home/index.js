import React from "react";
import SideDrawer from "../../shared/SideDrawer";
import { Text, View } from "native-base";

class Home extends React.Component {
  componentDidMount() {
    const { quiz, loadQuiz } = this.props;

    if (!quiz.loading && !quiz.data.length) {
      return loadQuiz();
    }
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text>My Quiz</Text>
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
