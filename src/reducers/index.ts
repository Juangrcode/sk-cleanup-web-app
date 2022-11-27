import authReducer from "@reducers/auth";

const reducer = (state: any, action: any) => {
  const auth = authReducer(state, action);

  return {
    ...state,
    ...auth,
  };
};

export default reducer;
