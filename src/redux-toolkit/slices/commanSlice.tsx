import {createSlice} from '@reduxjs/toolkit';

export const CommanSlice = createSlice({
  name: 'CommanSlice',
  initialState: {
    isLoader: false,
    userProfileData: undefined,
  },
  reducers: {
    isLoaderState: (state, action) => {
      state.isLoader = action.payload;
    },
    userProfileData: (state, action) => {
      state.userProfileData = action.payload;
    },
  },
});

export const {isLoaderState, userProfileData} = CommanSlice.actions;

export default CommanSlice.reducer;
