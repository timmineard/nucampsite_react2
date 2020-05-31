import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	};
}

export default App;

//				<Navbar dark color='primary'>
//					<div className='container'>
//						<NavbarBrand href='/'>NuCamp</NavbarBrand>
//					</div>
//				</Navbar>
//				<Directory campsites={this.state.campsites} />