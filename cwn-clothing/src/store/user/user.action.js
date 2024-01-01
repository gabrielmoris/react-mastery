import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUSer = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);

export const emailSignInStart = (email, password) => createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, { email, password });

export const signInSuccess = (user) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailure = (e) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, e);

export const signUpStart = (email, password, sisplayName) => createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, sisplayName });

export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user, additionalDetails });

export const signUpFailure = (e) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, e);

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailure = (e) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, e);
