// React
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { loginRequest } from "@actions/auth";
import { setDataUser, setDataToken } from "@actions/users";

import { getItemInLocalStorage, getItemInSessionStorage } from "@utils/window";

const Auth = ({ children }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser =
      getItemInLocalStorage("loggedEdySan") ||
      getItemInSessionStorage("loggedEdySan");

    if (loggedUser) {
      dispatch(loginRequest(loggedUser.data));
    }
  }, [dispatch]);

  return children;
};

const mapDispatchToProps = {
  setUser: setDataUser,
  setToken: setDataToken,
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  token: state.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
