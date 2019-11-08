import { INCREMENT, DECREMENT } from '../actions/actionTypes';

const initialState = {
  value: 0,
  increment: false,
  decrement: false,
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        increment: true,
        decrement: false
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        increment: false,
        decrement: true
      }
    default:
      return state;   
    }
  };

  export default countReducer
  