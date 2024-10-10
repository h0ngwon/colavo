export interface IItem {
  id: string;
  count: number;
  price: number;
  name: string;
}

export interface IItems {
  [key: string]: IItem;
}

export interface IDiscount {
  id: string;
  name: string;
  rate: number;
  itemId: string;
}

export interface IDiscounts {
  [key: string]: IDiscount;
}