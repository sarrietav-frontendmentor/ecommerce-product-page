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

export interface Action {
  type: 'Insert' | 'Delete' | 'Checkout' | 'IncrementCount' | 'DecrementCount';
  payload?: CartItem | number;
}
