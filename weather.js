const zip = message.split(' ')[1];
if (!zip || /[^0-9]/g.exec(zip)) {
	return 'Oops, please send your message in the format "@weather [zip code]"';
}

const rp = require('request-promise');
return rp('http://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid=cb96669f143f3c590505817420f9bf3d')
	.then((val) => {
		const res = JSON.parse(val);
		const temp = 9/5 * (parseFloat(res.main.temp) - 273) + 32;
		return 'It is '+res.weather[0].main+' in '+res.name+', with a temperature of '+temp+' F.';
	});