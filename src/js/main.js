import RealOrFake from './view_real-fake.js';
import Store from './view_store.js';
import User from './class_user.js';
import UserView from './view_user.js';



let store_link = document.createElement("a");
store_link.text = "Buy Exotic Banknotes";
store_link.href = "javascript:void(0)";
store_link.className = "selected";

let rf_link = document.createElement("a");
rf_link.text = "Anti-counterfeit Program";
rf_link.href = "javascript:void(0)";

let user_div = document.createElement("div");
let store_div = document.createElement("div");
let rf_div = document.createElement("div");

store_div.className = "store-div";
store_div.append(
    "Buy and sell rare bills and notes from exotic currencies around the world.",
    document.createElement("br"), document.createElement("br"),
    "You'll never know what you might find the next time you take a look!",
    document.createElement("br"), document.createElement("br"),
)

rf_div.style.display = "none";
rf_div.className = "rf-div";
rf_div.append(
    "When trading rare and exotic currencies, it can sometimes be hard to tell which offers are legitimate.",
    document.createElement("br"), document.createElement("br"),
    "Help us to screen our most recently-created offers to check if they are the real deal. Correctly identify fradulent offers and you can get monetary compensation for your time!",
    document.createElement("br"), document.createElement("br"),
)

store_link.onclick = () => {
    store_link.className = "selected";
    rf_link.className = "";
    store_div.style.display = "block";
    rf_div.style.display = "none";
    store_view.model.createNewListing();
    store_view.init();
};

rf_link.onclick = () => {
    store_link.className = "";
    rf_link.className = "selected";
    store_div.style.display = "none";
    rf_div.style.display = "block";
    store_view.model.clearListing();
    store_view.clear();
};

document.body.append(
    user_div,
    store_link, rf_link,
    store_div, rf_div,
);

let user = new User();

let user_view = new UserView(user_div, user);
let store_view = new Store(store_div, user);
let rof_view = new RealOrFake(rf_div, user);

user_view.store_view = store_view;

export {user_view};
