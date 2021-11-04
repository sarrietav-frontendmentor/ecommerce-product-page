export interface RootState {
  currentCount: number;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export enum ActionKind {
  Insert,
  Delete,
  Checkout,
  IncrementCount,
  DecrementCount,
}

export interface Action {
  type: ActionKind;
  payload?: CartItem | number;
}
