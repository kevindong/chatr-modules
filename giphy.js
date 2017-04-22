/* message, userId */
let search = encodeURI(message);
const rp = require('request-promise');

return rp('http://api.giphy.com/v1/gifs/search?q='+search+'&api_key=dc6zaTOxFJmzC')
		 .then((res) => {
			let response = JSON.parse(res);
			if (response.data.length > 0)
				return response.data[0].images.original.url;
			else return 'Nothing found.'
		 });