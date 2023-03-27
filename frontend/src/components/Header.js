import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import css from './css/Nav.css';
import logo from '../image/logo3.png';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<img
								src={logo}
								width='150'
								height='40'
								className='d-inline-block align-top'
								alt='React Bootstrap logo'
							/>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchBox history={history} />} />
						<Nav className='ml-auto'>
							<LinkContainer to='/'>
								<Nav.Link>
									<i className='fas fa-home'></i> Inicio
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<>
									<LinkContainer to='/cart'>
										<Nav.Link>
											<i className='fas fa-shopping-cart'></i> Carrito
										</Nav.Link>
									</LinkContainer>
									<NavDropdown title={userInfo.name} id='username'>
										<LinkContainer to='/profile'>
											<NavDropdown.Item>Perfil</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
									</NavDropdown>
								</>
							) : (
								<>
									<LinkContainer to='/login'>
										<Nav.Link>
											<i className='fas fa-user'></i> Iniciar sesión
										</Nav.Link>
									</LinkContainer>
									<LinkContainer to='/register'>
										<Nav.Link>
											<i className='fas fa-users'></i> Registrarse
										</Nav.Link>
									</LinkContainer>
								</>
							)}
							<LinkContainer to='/contact'>
								<Nav.Link>
									<i className='fas fa-address-book'></i> Contacto
								</Nav.Link>
							</LinkContainer>
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Usuarios</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productlist'>
										<NavDropdown.Item>Productos</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Ordenes</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
