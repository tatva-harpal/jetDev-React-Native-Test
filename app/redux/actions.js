export const addToFavourite = item => {
  return dispatch => {
    dispatch({
      type: 'ADD_FAVOURITE',
      payload: item,
    });
  };
};

export const removeFromFavourite = item => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_FAVOURITE',
      payload: item,
    });
  };
};
