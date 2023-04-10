async function getRandomMeal() {

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cbcf598b5msh05839a534f509a5p174ca4jsn4ee7545270e5',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/random.php');
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



async function getMealById(id) {

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cbcf598b5msh05839a534f509a5p174ca4jsn4ee7545270e5',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/lookup.php?i=' + id);
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




async function getMealBySearch(term) {

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cbcf598b5msh05839a534f509a5p174ca4jsn4ee7545270e5',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/search.php?s=' + term)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));