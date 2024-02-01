import { store } from "./store";

export function setCount(number: number) {
  store.dispatch({ type: "SET_COUNT", payload: number });
}