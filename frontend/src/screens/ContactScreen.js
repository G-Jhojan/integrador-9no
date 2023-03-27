import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import contact from '../image/contact.png';

const ContactScreen = () => {
	return (
		<div>
			<div className='contact-header'>
				<h1>Contáctanos</h1>
				<p>Comparte tu consulta e ideas con nosotros.!</p>
			</div>
			<Row>
				<Col md={6}>
					<img className='d-block w-100' src={contact} alt='contact-img' />
				</Col>
				<Col md={6}>
					<FormContainer>
						<Form>
							<Form.Group controlId='name'>
								<Form.Label>
									<i className='fas fa-user'></i> Nombre:{' '}
								</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
							</Form.Group>
							<Form.Group controlId='email'>
								<Form.Label>
									<i className='fas fa-envelope-square'></i> Correo electrónico:
								</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
							</Form.Group>
							<Form.Group controlId='text'>
								<Form.Label>
									<i className='fas fa-pen'></i> Mensaje
								</Form.Label>
								<Form.Control as='textarea' rows={3} />
							</Form.Group>

							<Button type='submit' variant='success' className='signin-btn' block>
								Enviar
							</Button>
						</Form>
					</FormContainer>
				</Col>
			</Row>
			<Row>
				<Col className='contact-end'>
					<h6>Dirección</h6>
					<p>
						Cotacachi <br />
						Imbabura
					</p>
				</Col>
				<Col className='contact-end'>
					<h6>Tel'efono</h6>
					<p>+########</p>
				</Col>
				<Col className='contact-end'>
					{' '}
					<h6>Correo</h6>
					<p>#######</p>
				</Col>
			</Row>
		</div>
	);
};

export default ContactScreen;
