import { create } from 'zustand';

interface Item {
  id: string;
  name: string;
  price: number;
  count: number;
}

interface StoreState {
  selectedItems: Item[];
  totalPrice: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const cartStore = create<StoreState>((set) => ({
  selectedItems: [],
  totalPrice: 0,
  addItem: (item) => set((state) => {
    const updatedItems = [...state.selectedItems, item];
    const updatedPrice = state.totalPrice + item.price;
    return { selectedItems: updatedItems, totalPrice: updatedPrice };
  }),
  removeItem: (id) => set((state) => {
    const updatedItems = state.selectedItems.filter(item => item.id !== id);
    const updatedPrice = updatedItems.reduce((sum, item) => sum + item.price, 0);
    return { selectedItems: updatedItems, totalPrice: updatedPrice };
  }),
}));

export default cartStore;