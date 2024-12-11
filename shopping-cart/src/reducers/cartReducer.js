export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.find((item) => item.id === action.payload.id)) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "CHANGE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity || 1 }
          : item,
      );
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
