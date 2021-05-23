const intialState = [
  {
    catogery: 'Electronics',
    name: 'MackBook',
    description: 'MackBook Description',
    price: 999,
    count: 10,
  },
  {
    catogery: 'Electronics',
    name: 'Iphone 12',
    description: 'Iphone 12 Description',
    price: 999,
    count: 10,
  },
  {
    catogery: 'Food',
    name: 'Pizza',
    description: 'Pizza Description',
    price: 12,
    count: 20,
  },
  {
    catogery: 'Food',
    name: 'Burger',
    description: 'Burger Description',
    price: 7,
    count: 20,
  },
];

const productsReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      state = state.filter((product) => product.catogery === payload);
      return state;

    default:
      return state;
  }
};

export const products = (active) => {
  return {
    type: 'ACTIVE',
    payload: active,
  };
};

export default productsReducer;
