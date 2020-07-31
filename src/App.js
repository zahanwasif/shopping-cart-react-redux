import React from 'react';
import {addProduct, removeProduct} from './redux/actions';
import {connect} from 'react-redux';

function App(props) {
	return (
		<>
			<div>
				{props.products.map((i, k) => (
					<div key={k}>
						{i.name} {i.id} {i.price} {i.total}
					</div>
				))}
			</div>
			<div>{props.totalPrice}</div>
			<button onClick={() => props.add({name: 'Zahan', id: 1, price: 10})}> + </button>
			<button onClick={() => props.remove({name: 'Zahan', id: 1, price: 10})}> - </button>
		</>
	);
}

const mapStateToProps = (state) => ({
	totalPrice: state.totalPrice,
	products: state.products,
});

const mapDispatchToProps = (dispatch) => {
	return {
		add: (ownProps) => dispatch(addProduct(ownProps)),
		remove: (ownProps) => dispatch(removeProduct(ownProps)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
