const intialState = {
  catogeries: [
    {
      normalized: 'Electronics',
      display: 'Electronics',
      description: 'descriptions for the Electronics.',
    },
    {
      normalized: 'Foods',
      display: 'Food',
      description: 'descriptions for the Foods',
    },
  ],
  active: 'Electronics',
};

const catogeriesReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      state.active = payload;
      return state;

    default:
      return state;
  }
};

export const active = (catogery) => {
  return {
    type: 'ACTIVE',
    payload: catogery,
  };
};

export default catogeriesReducer;
