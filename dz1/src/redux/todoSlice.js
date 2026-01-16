import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  nextId: 1,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: state.nextId,
        text: action.payload,
        completed: false,
      });
      state.nextId += 1;
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
