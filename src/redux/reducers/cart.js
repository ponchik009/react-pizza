const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART":
      const currentPizzaItems =
        !state.items[action.payload.id] || !state.items[action.payload.id].items
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: currentPizzaItems.length * action.payload.price,
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };

    case "CLEAR_CART":
      return initialState;

    case "REMOVE_CART_ITEM": {
      const newCartItems = {
        ...state.items,
      };

      delete newCartItems[action.payload];

      const newState = {
        ...state,
        items: newCartItems,
        totalCount: state.totalCount - state.items[action.payload].items.length,
        totalPrice: state.totalPrice - state.items[action.payload].totalPrice,
      };

      return newState;
    }

    case "REMOVE_PIZZA_CART": {
      const pizzaId = action.payload;

      const newPizzas = state.items[pizzaId].items;
      const removablePizza = newPizzas.pop();

      const newCartItems = {
        ...state.items,
        [pizzaId]: {
          items: newPizzas,
          totalPrice: state.items[pizzaId].totalPrice - removablePizza.price,
        },
      };

      if (!newPizzas.length) {
        delete newCartItems[pizzaId];
      }

      return {
        ...state,
        items: newCartItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - removablePizza.price,
      };
    }

    default:
      return state;
  }
};

export default cart;
