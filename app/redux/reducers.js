const initialState = {
  favouriteItems: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_FAVOURITE':
      let newFavouriteItems = state.favouriteItems.filter(favouritePost => {
        return action.payload.id !== favouritePost.id;
      });
      return Object.assign({}, state, {
        counter: state.counter - 1,
        favouriteItems: newFavouriteItems,
      });
    case 'ADD_FAVOURITE':
      return Object.assign({}, state, {
        counter: state.counter + 1,
        favouriteItems: [...state.favouriteItems, action.payload],
      });
    default:
      return state;
  }
};

export default reducers;
