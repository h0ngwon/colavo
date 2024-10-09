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
  name: string;
  rate: number;
}

export interface IDiscounts {
  [key: string]: IDiscount;
}