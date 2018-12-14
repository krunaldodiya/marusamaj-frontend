import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_CASTES,
  GET_CASTES_SUCCESS,
  GET_CASTES_FAIL
} from "../actions/get_castes";

import { api } from "../../libs/api";
import { makeRequest } from "../../services";

function* getCastes() {
  try {
    const { data } = yield call(makeRequest, api.castes, {});
    const { castes } = data;

    yield put({
      type: GET_CASTES_SUCCESS,
      payload: { castes: castes }
    });
  } catch (error) {
    yield put({
      type: GET_CASTES_FAIL,
      payload: { errors: error.response.data }
    });
  }
}

function* getCastesWatcher() {
  yield takeEvery(GET_CASTES, getCastes);
}

export { getCastesWatcher };
