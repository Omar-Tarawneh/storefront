const intialState = {
  products: [
    {
      catogery: 'Electronics',
      name: 'MackBook',
      description: 'MackBook Description',
      img: 'https://www.cnet.com/a/img/9hUptlSn2ERTqtdxWc_jX6Y62eU=/1200x675/2017/06/21/cd7d93a0-24b8-431c-8f5e-cfed4ff277f0/apple-macbook-12-inch-2017-03.jpg',
      price: 999,
      count: 10,
    },
    {
      catogery: 'Electronics',
      name: 'Iphone 12',
      description: 'Iphone 12 Description',
      img: 'https://img.router-switch.com/media/customoptions/128/2/6/iphone-12-pro-gray.jpg',
      price: 999,
      count: 10,
    },
    {
      catogery: 'Foods',
      name: 'Pizza',
      description: 'Pizza Description',
      img: 'https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg',
      price: 12,
      count: 20,
    },
    {
      catogery: 'Foods',
      name: 'Burger',
      description: 'Burger Description',
      img: 'https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg',
      price: 7,
      count: 20,
    },
  ],
  activeProducts: [],
};

const productsReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      state.activeProducts = state.products.filter(
        (product) => product.catogery === payload
      );
      return { ...state, activeProducts: state.activeProducts };

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
