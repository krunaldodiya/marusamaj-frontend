import React from "react";
import SideDrawer from "../../shared/SideDrawer";
import QuizList from "./quiz_list";

Quiz = props => {
  return (
    <SideDrawer {...props}>
      <QuizList {...props} />
    </SideDrawer>
  );
};

export default Quiz;
