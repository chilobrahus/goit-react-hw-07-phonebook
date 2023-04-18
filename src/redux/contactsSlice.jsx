import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

export const initialContacts = {
    contacts: [],
  }

  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
               state.contacts = action.payload;
        })
            .addCase(addContact.fulfilled, (state, action) => {
                 state.contacts.push(action.payload);
        })
              .addCase(deleteContact.fulfilled, (state, action) => {
                 state.contacts= state.contacts.filter(elem => elem.id !== action.payload.id);
               })
  }});
  
  export const contactsReducer = contactsSlice.reducer;