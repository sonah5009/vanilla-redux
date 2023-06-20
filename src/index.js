import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer function: modifying your data
const countModifier = (count = 0) => {
  //   console.log(count);
  return count;
};
const countStore = createStore(countModifier);

console.log(countStore.getState());
console.log(countStore);
// modifier & reducer의 return 값: 나의 application data
