export const browserDefaultLanguage = () => window.navigator.language.split('-')[0];

export const deviceScreenWidth = () => window.innerWidth;

export const deviceScreenHeight = () => window.innerHeight;

export const getItemInLocalStorage = (key: any) => JSON.parse(window.localStorage.getItem(key) || '{}');

export const setItemInLocalStorage = (key: any, value: any) => window.localStorage.setItem(key, JSON.stringify(value));

export const deleteLocalStorage = (key: any) => window.localStorage.removeItem(key);

export const getItemInSessionStorage = (key: any) => JSON.parse(window.sessionStorage.getItem(key) || '{}');

export const setItemInSessionStorage = (key: any, value: any) =>
  window.sessionStorage.setItem(key, JSON.stringify(value));

export const deleteSessionStorage = (key: any) => window.sessionStorage.removeItem(key);

export const validToken = () => {
  const { data } = getItemInLocalStorage('loggedEdySan') || getItemInSessionStorage('loggedEdySan');
  return data.token;
};

export const scrollUp = () => window.scroll(0, 0);
