import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBooks: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.selectedBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      state.selectedBooks = state.selectedBooks.filter(
        (book) => book.id !== action.payload
      );
    },
    clearBooks: (state) => {
      state.selectedBooks = [];
    },
  },
});

export const { addBook, removeBook, clearBooks } = bookSlice.actions;
export default bookSlice.reducer;
