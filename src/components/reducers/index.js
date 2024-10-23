// Tạo reducer



const account = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.userData;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};

export default account;
