const rp = require('request-promise');
return rp('https://hacker-news.firebaseio.com/v0/topstories.json')
	.then((value) => {
		const res = JSON.parse(value);
		return(`https://news.ycombinator.com/item?id=${res[0]}`);
	});
