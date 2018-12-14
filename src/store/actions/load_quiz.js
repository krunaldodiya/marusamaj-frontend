const LOAD_QUIZ = "LOAD_QUIZ";
const LOAD_QUIZ_SUCCESS = "LOAD_QUIZ_SUCCESS";
const LOAD_QUIZ_FAIL = "LOAD_QUIZ_FAIL";

const loadQuiz = payload => {
  return {
    type: LOAD_QUIZ,
    payload
  };
};

const loadQuizSuccess = payload => {
  return {
    type: LOAD_QUIZ_SUCCESS,
    payload
  };
};

const loadQuizFail = payload => {
  return {
    type: LOAD_QUIZ_FAIL,
    payload
  };
};

export {
  LOAD_QUIZ,
  LOAD_QUIZ_SUCCESS,
  LOAD_QUIZ_FAIL,
  loadQuiz,
  loadQuizSuccess,
  loadQuizFail
};
