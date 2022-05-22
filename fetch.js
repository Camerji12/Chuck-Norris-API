const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '345cd23516mshed85a5e5a8a352fp1b3b3ajsn468a1f67f88a'
    }
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=video%20game', options)
.then(response => {
    return response.json()
}).then(jokes => {
    // console.log(jokes.result);
    const comedy = jokes.result.map(jokeline => {
        return `
            <p class="joke">${jokeline.value}</p>
        `
    })
    document.querySelector("#cnjokes").insertAdjacentHTML('afterbegin', comedy);
})
