import React from 'react';
import { Link } from 'react-router-dom';

const AppLink = ({href, children}) => {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
};

export default AppLink;
