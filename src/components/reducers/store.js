import { combineReducers, createStore } from "redux";
import account from "./index.js";

const allReducers = combineReducers({
  account,
});

// Hàm lưu trạng thái user lại
function saveUserToLocalStore(state) {
  try {
    if(state.account)
        localStorage.setItem("reduxState", JSON.stringify(state.account));

  } catch (e) {
    console.log(e);
  }
}

// hàm tải trạng thái lên
function loadUserToLocalStore() {
  try {
    const init = localStorage.getItem("reduxState");
    if(init) return init;
    else return undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const prevState = loadUserToLocalStore();

const store = createStore(allReducers, prevState);

store.subscribe(() => saveUserToLocalStore(store.getState()));

export default store;
