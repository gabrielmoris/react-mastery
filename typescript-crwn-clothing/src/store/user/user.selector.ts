import { createSelector } from "reselect";
import { UserState } from "./user.reducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUserReducer = (state: any): UserState => state.user;
export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser);
