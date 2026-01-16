import { create } from 'zustand';

export const useUserStore = create((set) => ({
  items: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      set({ items: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
