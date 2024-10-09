import { create } from "zustand";
import { IItem } from "../types/types";

interface StoreState {
  selectedItems: IItem[];
  totalPrice: number;
  addItem: (item: IItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
}

const cartStore = create<StoreState>((set) => ({
  selectedItems: [],
  totalPrice: 0,
  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.selectedItems, item];
      const updatedPrice = state.totalPrice + item.price;
      return { selectedItems: updatedItems, totalPrice: updatedPrice };
    }),
  removeItem: (id) =>
    set((state) => {
      const updatedItems = state.selectedItems.filter((item) => item.id !== id);
      const updatedPrice = updatedItems.reduce((sum, item) => sum + item.price, 0);
      return { selectedItems: updatedItems, totalPrice: updatedPrice };
    }),
  updateQuantity: (id, newQuantity) =>
    set((state) => {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === id ? { ...item, count: newQuantity } : item,
      );
      const updatedPrice = updatedItems.reduce((sum, item) => sum + item.price * item.count, 0);
      return { selectedItems: updatedItems, totalPrice: updatedPrice };
    }),
}));

export default cartStore;
