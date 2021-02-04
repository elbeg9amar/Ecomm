import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySelector = createSelector(
    [selectDirectory],
    directory => directory.sections
);

export const selectIsDirectoryFetching = createSelector(
    [selectDirectory],
    directory => directory.isFetching
);

export const selectIsDirectoryLoaded = createSelector(
    [selectDirectory],
    directory => !!directory.sections
);