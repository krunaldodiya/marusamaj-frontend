import React from "react";
import SideDrawer from "../../shared/SideDrawer";
import QuizList from "./quiz_list";

Users = props => {
  return (
    <SideDrawer {...props}>
      <QuizList {...props} />
    </SideDrawer>
  );
};

export default Users;
