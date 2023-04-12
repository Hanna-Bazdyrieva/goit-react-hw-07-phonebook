import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, removeContact } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('contacts') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

const contactsReducer = contactsSlice.reducer;

export default contactsReducer;





    // getContactsRequest(state) {
    //   state.isLoading = true;
    // },
    // getContactsSuccess(state, { payload }) {
    //   state.isLoading = false;
    //   state.items = payload;
    // },
    // getContactsError(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },

    // addContactRequest(state) {
    //   state.isLoading = true;
    // },
    // addContactSuccess(state, { payload }) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     items: [...state.items, payload],
    //   };
    // },
    // addContactError(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },

    // removeContactRequest(state) {
    //   state.isLoading = true;
    // },
    // removeContactSuccess(state, { payload }) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     items: state.items.filter(el => el.id !== payload),
    //   };
    // },
    // removeContactError(state, { payload }) {
    //   state.isLoading = false;
    //   state.error = payload;
    // },

    // export const {
      //   getContactsRequest,
      //   getContactsSuccess,
      //   getContactsError,
      //   addContactRequest,
      //   addContactSuccess,
      //   addContactError,
      //   removeContactRequest,
      //   removeContactSuccess,
      //   removeContactError,
      // } = contactsSlice.actions;
      

