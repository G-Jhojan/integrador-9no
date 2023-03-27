import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Bienvenido',
	description: 'Vendemos los mejores productos a bajo precio',
	keywords: 'electronica, comprar electronica, electronica barata',
};

export default Meta;
