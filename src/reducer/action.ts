export function isLoggedIn(state: any) {
  return {
    type: 'IS_LOGGED_IN',
    payload: state,
  };
}

export function userToken(state: any) {
  return {
    type: 'USER_TOKEN',
    payload: state,
  };
}

export function userGroup(state: any) {
  return {
    type: 'USER_GROUP',
    payload: state,
  };
}
