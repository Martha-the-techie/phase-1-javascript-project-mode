const ketos = document.getElementById('ketos');


getRandomKeto();


async function getRandomKeto(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const respData = await resp.json();
    const randomKeto = respData.ketos[0];

    console.log(randomKeto);

    addKeto(randomKeto, true);
}

async function getKetoBtId(id) {
    const keto = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);


}

async function getKetoBySearch(term) {
    const ketos = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);



}

addKeto (ketoData, random = false) {
    
}