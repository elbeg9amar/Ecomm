
import {createSelector} from 'reselect';

const selectuser = state => state.users;

export const selectCurrentUser = createSelector(
    [selectuser],
    (users) => users.currentUser
)