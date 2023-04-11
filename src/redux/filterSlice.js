import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: {
      reducer(state, { payload }) {
        return (state = payload);
      },
      prepare(value) {
        return {
          payload: value.toLowerCase(),
        };
      },
    },
  },
});

const filterReducer = filterSlice.reducer;

export default filterReducer;

export const { changeFilter } = filterSlice.actions;
