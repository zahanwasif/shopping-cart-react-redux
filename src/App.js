import React from 'react';
import {addProduct, removeProduct, updatePrice} from './redux/actions';
import {useDispatch} from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	setTimeout(function () {
		dispatch(addProduct({id: 1, name: 'Zahan', gender: 'Male', price: 10}));
	}, 4000);
	setTimeout(function () {
		dispatch(updatePrice());
	}, 5000);
	setTimeout(function () {
		dispatch(addProduct({id: 1, name: 'Zahan', gender: 'Male', price: 10}));
	}, 6000);
	setTimeout(function () {
		dispatch(updatePrice());
	}, 7000);
	setTimeout(function () {
		dispatch(removeProduct({id: 1, name: 'Zahan', gender: 'Male', price: 10}));
	}, 8000);
	setTimeout(function () {
		dispatch(updatePrice());
	}, 9000);
	setTimeout(function () {
		dispatch(removeProduct({id: 1, name: 'Zahan', gender: 'Male', price: 10}));
	}, 10000);
	setTimeout(function () {
		dispatch(updatePrice());
	}, 11000);

	return (
		<>
			<div>Hello</div>
		</>
	);
};

export default App;
