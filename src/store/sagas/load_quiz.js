import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../libs/api";
import { makeRequest } from "../../services";
import {
  LOAD_QUIZ,
  LOAD_QUIZ_FAIL,
  LOAD_QUIZ_SUCCESS
} from "../actions/load_quiz";

function* loadQuiz() {
  try {
    const { data } = yield call(makeRequest, api.loadQuiz, {});    
    const { quiz } = data;

    yield put({
      type: LOAD_QUIZ_SUCCESS,
      payload: { quiz }
    });
  } catch (error) {
    yield put({
      type: LOAD_QUIZ_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* loadQuizWatcher() {
  yield takeEvery(LOAD_QUIZ, loadQuiz);
}

export { loadQuizWatcher };
