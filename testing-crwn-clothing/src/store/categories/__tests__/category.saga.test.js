import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";
import { call } from "typed-redux-saga/macro";
import { CATEGORIES_ACTION_TYPES } from "../category.types";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../category.action";

describe("test category sagas", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetcCategories", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test("fetchCategoriesAsync success", () => {
    const mockCategoriesArr = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArr]])
      .put(fetchCategoriesSuccess(mockCategoriesArr))
      .run();
  });

  test("fetchCategoriesAsync failure", () => {
    const mockErr = new Error("oh no");
    expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockErr)]])
      .put(fetchCategoriesFailed(mockErr))
      .run();
  });
});
