/* message, userId */
let search;
if (message.indexOf('@') !== -1) {
	search = encodeURI(message.split(' ').slice(1).join('+'));
} else {
	search = encodeURI(message);
}
const rp = require('request-promise');

return rp('http://api.giphy.com/v1/gifs/search?q='+search+'&api_key=dc6zaTOxFJmzC')
		 .then((res) => {
			let response = JSON.parse(res);
			return response.data[0].images.original.url;
		 });