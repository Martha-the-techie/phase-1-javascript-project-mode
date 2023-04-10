const meals = document.getElementById('meals');


async function getRandomMeal() {
    const resp = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1cbcf598b5msh05839a534f509a5p174ca4jsn4ee7545270e5',
            'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
        }
    };
    
    fetch('https://themealdb.p.rapidapi.com/randomselection.php')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        const respData = await resp.json();
        const randomMeal = respData.meals[0];

        console.log(randomMeal.meals[0]);

        addMeal(randomMeal, true);
}

getRandomMeal();

async function getMealById(id) {

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cbcf598b5msh05839a534f509a5p174ca4jsn4ee7545270e5',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/lookup.php?i=' + id)
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