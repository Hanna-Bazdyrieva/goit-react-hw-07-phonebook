import { createSlice } from '@reduxjs/toolkit';
// import contactsList from 'utils/contactsList';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getContactsRequest(state) {
      state.isLoading = true;
    },
    getContactsSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getContactsError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    addContactRequest(state) {
      state.isLoading = true;
    },
    addContactSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    addContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    removeContactRequest(state) {
      state.isLoading = true;
    },
    removeContactSuccess(state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(el => el.id !== payload),
      };
    },
    removeContactError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const contactsReducer = contactsSlice.reducer;

export const {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} = contactsSlice.actions;

export default contactsReducer;
