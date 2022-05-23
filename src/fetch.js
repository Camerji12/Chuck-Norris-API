let jok = document.getElementById('content');
const apiKey = "345cd23516mshed85a5e5a8a352fp1b3b3ajsn468a1f67f88a"

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': apiKey
	}
};

function fetchAPI(){
	fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => {
		return response.json();
	}).then(jokes => {
		console.log(jokes.value);
		jok.innerHTML = jokes.value;
	})
	.catch(err => {
		alert("Something went wrong...");
	})
}

fetchAPI();

function newjoke() {
	fetchAPI();
}

function copy() {
	let jokecopy = document.getElementById('content').innerHTML;
	navigator.clipboard.writeText(jokecopy)
		.then(() => {
			alert("Following joke has been copied to clipboard: " + "\r" + jokecopy);
		}).catch(err => {
			alert("Something went wrong...");
		})
}