const intialState = {
  cart: [],
  num: 0,
};

export default function cartReducer(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      if (!state.cart.length) {
        payload['item'] = 1;
        state.num += 1;
        state.cart.push(payload);
        return { ...state };
      } else {
        let flag = false;
        for (let i = 0; i < state.cart.length; i++) {
          if (payload.id === state.cart[i].id) {
            state.num += 1;
            state.cart[i].item += 1;
            flag = true;
          }
        }
        if (!flag) {
          payload['item'] = 1;
          state.num += 1;
          state.cart.push(payload);
        }
        return { ...state };
      }
    default:
      return state;
  }
}

export const addCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};
