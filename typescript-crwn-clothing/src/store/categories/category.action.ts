import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export type tyoeFetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type fetchCategoriesSucess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
export type fetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export type CagegoryAction = tyoeFetchCategoriesStart | fetchCategoriesSucess | fetchCategoriesFailed;

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray: Category[]): fetchCategoriesSucess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error: Error): fetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
