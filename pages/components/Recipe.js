import React, { useState } from 'react';


function Weather({ temp, name, time, country, cond, condImg }) {

	const getNowDate = ({ time }) => {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const date = new Date(time);
		const hours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
		const minutes =  date.getMinutes() > 9 ?  date.getMinutes() : '0' +  date.getMinutes();
		return hours + ':' + minutes + ' ' + days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
	}

	return (
		<div id="weather">
			<h2>{name}</h2>
			<span id="country">{country}</span>
			<p>{getNowDate({ time })}</p>
			<p id='temp'>{temp}° C</p>
			<div id='cond'>
				<img src={condImg}></img>
				<span>{cond}</span>
			</div>
		</div >
	)
}

export default Weather;