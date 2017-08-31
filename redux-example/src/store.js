// Importing the createStore method from redux
import { createStore } from 'redux';

// Declaring the reducer function
const reducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		return {
			...state,
			cart: state.cart.concat(action.product)
		}
	} else if (action.type === "REMOVE_ITEM") {
		return {
			...state,
			cart: state.cart.filter(product => product.id !== action.product.id)
		};
	}

	return state;
};

// Creating the store, name of the function reducer and the initial state
export default createStore(reducer, { cart: [] });