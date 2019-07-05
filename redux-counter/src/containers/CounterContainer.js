import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increaseAction, decrementAction } from "../actions/CounterAction";

//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(increaseAction()),
    onDecrementClick: () => dispatch(decrementAction())
  };
}

// Connected Component
const CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterApp;
