import { scrollUp } from '@utils/window';

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'MODAL_FORGIVE_PASSWORD':
      scrollUp();
      return {
        ...state,
        modalForgivePassword: action.payload,
      };
  }
};

export default authReducer;
