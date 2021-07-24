import { CartActionTypes } from './cart.types';


export const toggleCartHidden = cart => {
	return({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
	});
}