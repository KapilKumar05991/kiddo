import { create } from 'zustand';

interface CartState {
  cartItems: number
  items: Record<string, number>;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: 0,
  items: {},
  increment: (id) =>
    set((state) => ({
      cartItems: state.cartItems + 1,
      items: { ...state.items, [id]: (state.items[id] || 0) + 1 },
    })),
  decrement: (id) =>
    set((state) => {
      const currentQty = state.items[id] || 0;
      if (currentQty <= 1) {
        const newItems = { ...state.items };
        delete newItems[id];
        return { items: newItems, cartItems: state.cartItems - 1 };
      }
      return { items: { ...state.items, [id]: currentQty - 1 }, cartItems: state.cartItems - 1 };
    }),
}));