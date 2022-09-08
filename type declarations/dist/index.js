"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
const rand = lodash_1.default.sample([45, 24, 2342, 424, 245, 42, 52, 524]);
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log(e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
