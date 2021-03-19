export const isLogin = () => {
  if (localStorage.getItem("authTokenFinance")) {
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("authTokenFinance");
  window.location.reload();
};
