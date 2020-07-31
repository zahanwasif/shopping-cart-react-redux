import React from 'react';
import {addProduct, removeProduct} from './redux/actions';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

function App() {
	const dispatch = useDispatch();
	var products = useSelector((state) => state.products);
	var totalPrice = useSelector((state) => state.totalPrice);

	return (
		<>
			<div>
				{products.map((i, key) => (
					<div>
						<div key={key}>
							{i.name} {i.gender} {i.price} {i.total}
						</div>
					</div>
				))}
			</div>
			<div>{totalPrice}</div>
			<button onClick={() => dispatch(addProduct({name: 'Zahan', id: 1, price: 10}))}> + </button>
			<button onClick={() => dispatch(removeProduct({name: 'Zahan', id: 1, price: 10}))}> - </button>
		</>
	);
}

export default App;
