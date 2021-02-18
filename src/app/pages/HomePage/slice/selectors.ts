import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.appSlice || initialState;

export const selectAppSlice = createSelector([selectSlice], state => state);
