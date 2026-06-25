import { useCartStore } from "@/store/cart-store";
import { Action } from "@/types/action";
import { navigate } from "expo-router/build/global-state/router";

export const handleAction = (action?: Action) => {
  if (!action) return;

  switch (action.type) {
    case 'ADD_TO_CART': {
      const productId = action.payload.id;
      useCartStore.getState().increment(productId);
      console.log(`[Dispatcher] Added product ${productId} to cart.`);
      break;
    }
    
    case 'DEEP_LINK': {
      const route = action.payload.url;
      navigate(route);
      console.log(`[Dispatcher] Navigating to ${route}`);
      break;
    }

    case 'GIFT_COUPON': {
      console.log(`[Dispatcher] Applying carnival coupon!`);
      break;
    }

    default:
      if (__DEV__) {
        console.warn(`[Dispatcher] Unhandled action type: ${action.type}`);
      }
  }
};