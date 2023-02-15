import create from 'zustand';

const useStore = create((set) => ({
  isNavOpen: false,
  openNav: () => set((state) => ({ isNavOpen: true })),
  closeNav: () => set((state) => ({ isNavOpen: false })),
}));

export default useStore;