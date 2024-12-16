export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id } = action.payload;
      const isPresent = state.find((item) => item.id === id);
      if (isPresent) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case "CHANGE_QUANTITY": {
      const { id, quantity } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
    }
    case "REMOVE_ITEM": {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}
