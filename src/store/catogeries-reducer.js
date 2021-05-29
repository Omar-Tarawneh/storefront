const intialState = {
  catogeries: [
    {
      normalized: 'electronics',
      display: 'electronics',
      description: 'descriptions for the Electronics.',
    },
    {
      normalized: 'food',
      display: 'foods',
      description: 'descriptions for the Foods',
    },
  ],
  active: '',
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
