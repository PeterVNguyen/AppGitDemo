import R from 'ramda';

const getLoginEmail = R.pathOr('', ['authentication', 'email',]);
const getLoginPassword = R.pathOr('', ['authentication', 'password',]);
const getLoginMsg = R.pathOr('', ['authentication', 'messenger',]);
const getLoading = R.pathOr('', ['authentication', 'loading',]);

const Selectors = {
  getLoginEmail,
  getLoginPassword,
  getLoginMsg,
  getLoading,
};

export { Selectors };