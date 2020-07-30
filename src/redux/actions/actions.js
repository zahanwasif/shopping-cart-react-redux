import {ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRICE} from './actionTypes';

export const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: {
			product,
		},
	};
};

export const removeProduct = (product) => {
	return {
		type: REMOVE_PRODUCT,
		payload: {
			product,
		},
	};
};

export const updatePrice = () => {
	return {
		type: UPDATE_PRICE,
	};
};
