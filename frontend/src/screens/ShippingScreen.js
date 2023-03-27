import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import delivery from '../image/delivery.png';
import css from '../components/css/Nav.css';

const ShippingScreen = ({ history }) => {
	const cart = useSelector(state => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const dispatch = useDispatch();

	const submitHandler = e => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		history.push('/payment');
	};

	return (
		<Row>
			<Col md={4}>
				<img src={delivery} className='d-block w-100' height='400px' alt='delivery-img' />
			</Col>
			<Col md={8}>
				<FormContainer>
					<h1>Dirección de envío</h1>
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='address'>
							<Form.Label>Dirección</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese su dirección'
								value={address}
								required
								onChange={e => setAddress(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='city'>
							<Form.Label>Ciudad</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese su ciudad'
								value={city}
								required
								onChange={e => setCity(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='postalCode'>
							<Form.Label>Código postal</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese su código postal'
								value={postalCode}
								required
								onChange={e => setPostalCode(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId='country'>
							<Form.Label>País</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ingrese su país'
								value={country}
								required
								onChange={e => setCountry(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type='submit' variant='success' className='signin-btn' block>
							Continuar
						</Button>
					</Form>
				</FormContainer>
			</Col>
		</Row>
	);
};

export default ShippingScreen;
