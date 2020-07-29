import {ADD_PRODUCT, REMOVE_PRODUCT, DEC_PRODUCT} from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT: {
			const {product} = action.payload;
			return {
				...state,
				product,
			};
		}
		case REMOVE_PRODUCT: {
			break;
		}
		case DEC_PRODUCT: {
			break;
		}
		default:
			return state;
	}
}
