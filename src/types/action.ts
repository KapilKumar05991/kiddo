export type ActionType = 'ADD_TO_CART' | 'DEEP_LINK' | 'GIFT_COUPON';

export interface Action {
  type: ActionType;
  payload: Record<string, any>; 
}