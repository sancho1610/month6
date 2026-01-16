import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  items: [],
  nextId: 1,

  addTodo: (text) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: state.nextId,
          text,
          completed: false,
        },
      ],
      nextId: state.nextId + 1,
    })),

  removeTodo: (id) =>
    set((state) => ({
      items: state.items.filter((todo) => todo.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      items: state.items.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  editTodo: (id, text) =>
    set((state) => ({
      items: state.items.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    })),
}));
