export const INCREMENT = "INCREMENT";
export const DECREASE = "INCREMENT";

// Action
export function increaseAction() {
  return {
    type: INCREMENT
  };
}
export function decrementAction() {
  return {
    type: DECREASE
  };
}
