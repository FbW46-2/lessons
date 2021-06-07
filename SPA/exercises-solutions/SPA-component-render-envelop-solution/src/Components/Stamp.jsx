import React from 'react';

import '../CSS/Stamp.css';

function Stamp({ image }) {
	return (
		<aside className="stamp">
			<img alt="stamp" className="stamp-image" src={image} />
		</aside>
	);
}

export default Stamp;
