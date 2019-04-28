import RealOrFake from './view_real-fake.js';
import User from './class_user.js';

let div = document.createElement("div");
document.body.appendChild(div);

let g = new RealOrFake(div, new User());
