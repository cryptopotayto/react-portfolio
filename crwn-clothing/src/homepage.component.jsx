import React from 'react';
import './homepage.styles.scss';

const Homepage = () => {
	return(
	<div className='homepage'>
		<div className='directory-menu'>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Hat</h1>
				<span className='subtitle'>Show Now</span>	
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Jacket</h1>
				<span className='subtitle'>Show Now</span>	
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Shoes</h1>
				<span className='subtitle'>Show Now</span>	
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Women</h1>
				<span className='subtitle'>Show Now</span>	
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Men</h1>
				<span className='subtitle'>Show Now</span>	
				</div>
			</div>
		</div>
	</div>
	);
}

export default Homepage;