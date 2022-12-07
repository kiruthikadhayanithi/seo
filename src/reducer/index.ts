const initialState = {
  isLoggedIn: false,
  userGroup: null,
  userToken: null,
};

const appReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return Object.assign({}, state, {
        isLoggedIn: action.payload,
      });
    case 'USER_TOKEN':
      return Object.assign({}, state, {
        userToken: action.payload,
      });
    case 'USER_GROUP':
      return Object.assign({}, state, {
        userGroup: action.payload,
      });
    default:
      return Object.assign({}, state);
  }
};

// Action creators are generated for each case reducer function
// export const { isLoggedIn, userGroup, userToken } = reducerSlice.actions;

export default appReducer;
