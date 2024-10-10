import { create } from "zustand";
import { IDiscount, IItem } from "../types/types";

interface StoreState {
  selectedItems: IItem[];
  selectedDiscounts: IDiscount[];
  totalPrice: number;
  totalDiscount: number;
  finalPrice: number;
  addItem: (item: IItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  addDiscount: (discount: IDiscount) => void;
  removeDiscount: (id: string) => void;
}

const cartStore = create<StoreState>((set) => ({
  selectedItems: [],
  selectedDiscounts: [],
  totalPrice: 0,
  totalDiscount: 0,
  finalPrice: 0,
  addItem: (item: IItem) =>
    set((state) => {
      const updatedItems = [...state.selectedItems, item];
      const updatedPrice = state.totalPrice + item.price;
      const finalPrice = updatedPrice * (1 - state.totalDiscount);
      return { selectedItems: updatedItems, totalPrice: updatedPrice, finalPrice };
    }),
  removeItem: (id: string) =>
    set((state) => {
      const updatedItems = state.selectedItems.filter((item) => item.id !== id);
      const updatedPrice = updatedItems.reduce((sum, item) => sum + item.price, 0);
      const finalPrice = updatedPrice * (1 - state.totalDiscount);
      return { selectedItems: updatedItems, totalPrice: updatedPrice, finalPrice };
    }),
  updateQuantity: (id: string, newQuantity: number) =>
    set((state) => {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === id ? { ...item, count: newQuantity } : item,
      );
      const updatedPrice = updatedItems.reduce((sum, item) => sum + item.price * item.count, 0);
      const finalPrice = updatedPrice * (1 - state.totalDiscount);
      return { selectedItems: updatedItems, totalPrice: updatedPrice, finalPrice };
    }),
  addDiscount: (discount: IDiscount) =>
    set((state) => {
      const updatedDiscounts = [...state.selectedDiscounts, discount ];
      const updatedTotalDiscount = updatedDiscounts.reduce(
        (sum, discount) => sum + discount.rate,
        0,
      );
      const finalPrice = state.totalPrice * (1 - updatedTotalDiscount);
      return {
        selectedDiscounts: updatedDiscounts,
        totalDiscount: updatedTotalDiscount,
        finalPrice,
      };
    }),
  removeDiscount: (id: string) =>
    set((state) => {
      const updatedDiscounts = state.selectedDiscounts.filter((discount) => discount.id !== id);
      const updatedTotalDiscount = updatedDiscounts.reduce(
        (sum, discount) => sum + discount.rate,
        0,
      );
      const finalPrice = state.totalPrice * (1 - updatedTotalDiscount);
      return {
        selectedDiscounts: updatedDiscounts,
        totalDiscount: updatedTotalDiscount,
        finalPrice,
      };
    }),
}));

export default cartStore;
