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


//Listeners
submit.addEventListener('submit', searchMeal);

random.addEventListener('click', randomMeal);

mealsEl.addEventListener("click", (e) => {                          
	const mealInfo = e.target;
    
    if(mealInfo){
        const mealID=mealInfo.getAttribute('data-mealId')
        getMealById(mealID)
        localStorage.setItem("mealID",mealID);
        location.href="food.html";
    }
});