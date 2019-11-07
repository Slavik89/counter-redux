import { INCREMENT, DECREMENT } from './actionTypes';

export const increment = (value, increment, decrement) => {
    return {
        type: INCREMENT,
        value,
        increment,
        decrement
    }
}

export const decrement = (value, increment, decrement) => {
    return {
        type: DECREMENT,
        value,
        increment,
        decrement
    }
}
