import superagent from 'superagent';

export const getRemoteData = function (api) {
  return (dispatch) => {
    return superagent
      .get(api)
      .then((response) => {
        dispatch(getProducts({ products: response.body.results }));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};

export const getProducts = (products) => {
  return {
    type: 'GET',
    payload: products,
  };
};
