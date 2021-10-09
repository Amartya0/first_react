import './App.scss';
import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Landing } from './components/Landing/Landing';

const App = () => {
	return (
		<div className="mainContainer">
			<Landing />
		</div>
	);
};

export default App;
