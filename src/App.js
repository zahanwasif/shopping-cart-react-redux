import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, removeProduct, checkout} from './redux/actions';

const App = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	var products = [
		{name: 'iPhone10', id: 1, price: 999},
		{name: 'iPhone11', id: 2, price: 1200},
		{name: 'Macbook Pro', id: 3, price: 1500},
		{name: 'iPhone12', id: 4, price: 1500},
	];

	return (
		<div>
			<div>total price : {state.totalPrice} dollars </div>
			<div>
				{products.map((product) => (
					<div>
						<b>{product.name}</b> is of <b>{product.price} dollars </b>
						<button onClick={() => dispatch(addProduct(product))}> Add to cart </button>
						<button onClick={() => dispatch(removeProduct(product))}> remove from cart</button>
						<div>Quantity : {state.products.find((x) => x.id === product.id) ? state.products.find((x) => x.id === product.id).total : 0}</div>
					</div>
				))}
			</div>
			<button onClick={() => dispatch(checkout())}>checkout</button>
		</div>
	);
};

export default App;
