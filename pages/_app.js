import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import '../styles/style.css';
import Weather from './components/Recipe';
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: 'Moscow',
			search: '',
			eror: false
		}
		this.handleClick = this.handleClick.bind(this)
	}


	handleChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}
	handleClick = (e) => {
		e.preventDefault();
		this.setState({
			query: this.state.search
		});
	}
	componentDidMount() {
		const API = "https://api.weatherapi.com/v1/current.json?";
		fetch(API + new URLSearchParams({
			q: this.state.query,
			key: 'ca9808709d6641a69da103943232006',
		})).then(data => data.json()).then(data => this.setState({ weather: data })).catch(err => console.log(err));
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			const API = "https://api.weatherapi.com/v1/current.json?";
			fetch(API + new URLSearchParams({
				q: this.state.query,
				key: 'ca9808709d6641a69da103943232006',
			})).then(data => data.json()).then(data => {this.setState({ weather: data })});
		}
	}
	render() {
		return (

			<div id="">
				<div id='search-block'>
					<input type='text' value={this.state.search} onChange={this.handleChange}></input>
					<button onClick={this.handleClick}>Search</button>
				</div>

				{this.state.weather && this.state.weather.hasOwnProperty('current') ? 
					<Weather
						temp={this.state.weather['current'].temp_c}
						cond={this.state.weather.current.condition.text}
						condImg={this.state.weather.current.condition.icon}
						country={this.state.weather.location.country}
						name={this.state.weather.location.name}
						time={this.state.weather.location.localtime}
					>

					</Weather> : <h1 style={{textAlign: 'center', marginTop: '10px'}}>Попробуйте ещё раз</h1>
				}
			</div >
		)
			}

}
export default App;
