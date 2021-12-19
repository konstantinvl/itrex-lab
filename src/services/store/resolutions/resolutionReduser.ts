import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionsState } from '../../interfaces';
import { RootState } from '../store';

const initialState: ResolutionsState = {
    resolutions: [],
    total: 0,
};

export const resolutionsSlice = createSlice({
    name: 'resolution',
    initialState,
    reducers: {
        requestFullfiled: (state, action: PayloadAction<ResolutionsState>) => {
            return { ...action.payload };
        },
    },
});

export const getResolutionsState = (state: RootState): ResolutionsState => state.resolutions;
export const selectResolutionByID = createSelector(
    [getResolutionsState, (state, id: string) => id],
    (state, id) => state.resolutions.find((rez) => rez.appointment_id === id),
);

export default resolutionsSlice.reducer;
