import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios.defaults.baseURL = 'https://6404764980d9c5c7bac857c8.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);