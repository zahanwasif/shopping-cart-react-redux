import {ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRICE} from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	totalProducts: 0,
	products: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT: {
			const {product} = action.payload;
			let total = 0;
			let found = state.products.find((i) => {
				if (i.id === product.id) {
					total = i.total;
				}
				return i.id === product.id;
			});
			if (found) {
				return Object.assign({}, state, {
					products: state.products.map((i) => {
						if (i.id === product.id) {
							total += 1;
							return {...product, total};
						}
						return i;
					}),
				});
			} else {
				return {
					...state,
					products: [...state.products, {...product, total: 1}],
				};
			}
		}
		case REMOVE_PRODUCT: {
			const {product} = action.payload;
			let total = 0;
			let found = state.products.find((i) => {
				if (i.id === product.id) {
					total = i.total;
				}
				return i.id === product.id;
			});
			if (found) {
				if (total === 1) {
					return Object.assign({}, state, {
						products: state.products.filter((i) => i.id !== product.id),
					});
				} else if (total > 1) {
					return Object.assign({}, state, {
						products: state.products.map((i) => {
							if (i.id === product.id) {
								i.total -= 1;
							}
							return i;
						}),
					});
				} else {
					return state;
				}
			} else {
				return state;
			}
		}
		case UPDATE_PRICE: {
			let updatedPrice = 0;
			let updatedProducts = 0;
			state.products.forEach((product) => {
				updatedPrice += product.price * product.total;
				updatedProducts += product.total;
			});
			return {...state, totalPrice: updatedPrice, totalProducts: updatedProducts};
		}
		default:
			return state;
	}
}
