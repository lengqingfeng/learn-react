import { INCREMENT, DECREASE } from "../actions/CounterAction";
export default (state = { count: 0 }, action) => {
  const count = state.count;
  switch (action.type) {
    case INCREMENT:
      return { count: count + 1 };
    case DECREASE:
      return { count: count - 1 };
    default:
      return state;
  }
};
