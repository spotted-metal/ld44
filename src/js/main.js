import RealOrFake from './view_real-fake.js';
import Store from './view_store.js';
import User from './class_user.js';
import UserView from './view_user.js';



let store_link = document.createElement("a");
store_link.text = "Buy Exotic Banknotes";
store_link.href = "javascript:void(0)";

let rf_link = document.createElement("a");
rf_link.text = "Anti-counterfeit Program";
rf_link.href = "javascript:void(0)";

let user_div = document.createElement("div");
let store_div = document.createElement("div");
let rf_div = document.createElement("div");

rf_div.style.display = "none";
rf_div.className = "rf-div";

store_link.onclick = () => {
    store_div.style.display = "block";
    rf_div.style.display = "none";
};

rf_link.onclick = () => {
    store_div.style.display = "none";
    rf_div.style.display = "block";
};

document.body.append(
    user_div,
    rf_link, store_link,
    rf_div, store_div,
);

let user = new User();

let user_view = new UserView(user_div, user);
let store_view = new Store(store_div, user);
let rof_view = new RealOrFake(rf_div, user);

user_view.store_view = store_view;

export {user_view};
