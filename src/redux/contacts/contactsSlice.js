import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getAllContacts.pending]: handlePending,
    [getAllContacts.fulfilled](state, actions) {
      state.items = actions.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getAllContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, actions) {
      state.items.push(actions.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, actions) {
      const currentIndex = state.items.findIndex(
        contact => contact.id === actions.payload.id
      );
      state.items.splice(currentIndex, 1);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: handleRejected,

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, actions) {
      const currentIndex = state.items.findIndex(
        contact => contact.id === actions.payload.id
      );
      state.items.splice(currentIndex, 1, actions.payload);
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
