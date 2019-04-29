import RealOrFake from './view_real-fake.js';
import Store from './view_store.js';
import User from './class_user.js';
import UserView from './view_user.js';



let user_div = document.createElement("div");
let rf_div = document.createElement("div");
let store_div = document.createElement("div");

document.body.append(user_div, rf_div, store_div);

let user = new User();

let user_view = new UserView(user_div, user);
let rof_view = new RealOrFake(rf_div, user);
let store_view = new Store(store_div, user);

user_view.store_view = store_view;

export {user_view};
