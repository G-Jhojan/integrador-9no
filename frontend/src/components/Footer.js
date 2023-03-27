import React from 'react';
import css from './css/Nav.css';

const Footer = () => {
	return (
		<div className='bg-light footer'>
			<br />
			<div className='container' style={{ color: 'black' }}>
				<div className='row'>
					<div className='col'>
						<h3>Información</h3>
						<a href='/' style={{ color: 'black' }}>
							Contactanos
						</a>
						<br />
						<a href='/' style={{ color: 'black' }}>
							Sobre nostros
						</a>
						<br />
					</div>
					<div className='col'>
						<h3>Terminos & Condiciones</h3>

						<a href='/' style={{ color: 'black' }}>
							Privacidad
						</a>
						<br />
						<a href='/' style={{ color: 'black' }}>
							Términos de devolución de productos
						</a>
						<br />
					</div>
					<div className='col'>
						<h3>Contactanos</h3>

						<a href='/' style={{ color: 'black' }}>
							Email : jambimascari@gmail.com
						</a>
						<br />
						<a href='/' style={{ color: 'black' }}>
							Envíe sus comentarios
						</a>
						<br />
					</div>
				</div>
				<br />
				<div className='row'>
					<div className='col'>
						<p className='text-center'> Copyright &copy; Todos los derechos reservados</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
