const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');


//Search meals
async function searchMeal(e){
    e.preventDefault();

    //Clear single meal
    single_mealEl.innerHTML=''

    //Get search term
    const term=search.value;
    
    //Check for empty
    if(term.trim()){
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        const data = await res.json();

        resultHeading.innerHTML=`<h2>Search results for '${term}':</h2>`;
        if(data.meals===null){
            resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
        }else{
            mealsEl.innerHTML = data.meals.map(meal=>`
                <div class="meal">
                   <img src = "${meal.strMealThumb}" alt="${meal.strMeal}">
                   <div class="meal-info" data-mealID="${meal.idMeal}">
                     <h3>${meal.strMeal}</h3>
                   </div>
                </div>
            `).join('');
            
            //Clear search
            search.value=''
        }

    }else{
        alert('Please enter a search')
    }
}


//Fetch meal by Id
async function getMealById(mealID){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    const data = await res.json();
    const meal=data.meals[0]
    addMealToDOM(meal)
}

//Random meal
async function randomMeal() {
    // Clear meals and heading
    mealsEl.innerHTML = '';
    resultHeading.innerHTML = '';
  
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    const data = await res.json()
      const meal = data.meals[0];
        addMealToDOM(meal); 
  }
  

// Add meal to DOM
function addMealToDOM(meal) {
    const ingredients = [];
  
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  
    single_mealEl.innerHTML = `
      <div class="single-meal">
        <h1>${meal.strMeal}</h1>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="single-meal-info">
          ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
          ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
        </div>
        <div class="main">
          <p>${meal.strInstructions}</p>
          <h2>Ingredients</h2>
          <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
}
  




//Listeners
submit.addEventListener('submit', searchMeal);

random.addEventListener('click', randomMeal);

mealsEl.addEventListener("click", (e) => {                          
	const mealInfo = e.target;
    
    if(mealInfo){
        const mealID=mealInfo.getAttribute('data-mealId')
        getMealById(mealID)
    }
});