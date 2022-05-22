let jok = document.getElementById('hello');
// let jokecopy = document.getElementById('hello');

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '345cd23516mshed85a5e5a8a352fp1b3b3ajsn468a1f67f88a'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => {
		return response.json();
	}).then(jokes => {
		console.log(jokes.value);
		jok.innerHTML = jokes.value;
	})

function newjoke() {
	let jok = document.getElementById('hello');

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
			'X-RapidAPI-Key': '345cd23516mshed85a5e5a8a352fp1b3b3ajsn468a1f67f88a'
		}
	};

	fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
		.then(response => {
			return response.json();
		}).then(jokes => {
			console.log(jokes.value);
			jok.innerHTML = jokes.value;
		})
}


function copy() {
	let jokecopy = document.getElementById('hello').innerHTML;
	navigator.clipboard.writeText(jokecopy)
		.then(() => {
			alert("Following joke has been copied to clipboard: " + "\r" + err);
		})
		.catch(err => {
			alert("Something went wrong...");
		})
}