// Login
export const loginRequest = (payload: any) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

// Logout
export const logoutRequest = (payload: any) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});
