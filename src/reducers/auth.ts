const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "REGISTER_REQUEST":
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload?.user,
        token: action.payload?.token,
      };
  }
};

export default authReducer;
