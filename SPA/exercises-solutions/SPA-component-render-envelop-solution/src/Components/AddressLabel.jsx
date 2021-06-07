import React from 'react';

import '../CSS/AddressLabel.css';

function AddressLabel({ person }) {
	return (
		<>
			<ol className="person">
				<li className="full-name">{person.fullName}</li>
				<li className="address">{person.address}</li>
				<li className="state-city-zip">{person.cityStateZip}</li>
			</ol>
		</>
	);
}

export default AddressLabel;
