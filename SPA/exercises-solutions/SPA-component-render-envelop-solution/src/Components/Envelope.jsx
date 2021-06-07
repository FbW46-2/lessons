import React from 'react';

import AddressLabel from './AddressLabel';
import Stamp from './Stamp';

import StampImage from '../CSS/Stamp.jpg';
import '../CSS/Envelope.css';

function Envelope({ fromPerson, toPerson }) {
	return (
		<main className="envelope">
			<section className="fromPerson">
				<AddressLabel person={fromPerson} />
			</section>
			<section className="toPerson">
				<AddressLabel person={toPerson} />
			</section>
			<Stamp image={StampImage} />
		</main>
	);
}


export default Envelope;
