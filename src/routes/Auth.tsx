// React
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { loginRequest } from '@actions/auth';
import { setDataUser, setDataToken } from '@actions/users';

import { getItemInLocalStorage, getItemInSessionStorage } from '@utils/window';
import config from '@config/index';
import useLocalStorage from '@hooks/useLocalStorage';

const Auth = ({ children }: any) => {
  const dispatch = useDispatch();

  const [skCleanupLogged, setSkCleanupLogged] = useLocalStorage(config.keyName, '');
  useEffect(() => {
    console.log({ config });
    const loggedUser = skCleanupLogged;

    console.log({ loggedUser });

    if (loggedUser) {
      dispatch(loginRequest(loggedUser));
    }
  }, [dispatch, skCleanupLogged]);

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
