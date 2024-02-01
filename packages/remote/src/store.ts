import { legacy_createStore as createStory } from "redux";

interface State {
  count: number;
}

type setCountAction = {
  type: "SET_COUNT";
  payload: number;
};

export function setCount(count: number): setCountAction {
  return {
    type: "SET_COUNT",
    payload: count,
  };
}

const initialStore: State = {
  count: 0,
};

function reducer(state = initialStore, action: setCountAction) {
  switch (action.type) {
    case "SET_COUNT":
      return { count: action.payload };
    default:
      return state;
  }
}

export const store = createStory(reducer);
