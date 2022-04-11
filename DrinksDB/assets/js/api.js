//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#search').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('#mainDrink').innerText = "How about a " + data.drinks[0].strDrink + "?"
      // document.querySelector('#mainType').innerText = data.drinks[0].strCategory
      document.querySelector('#drinkQuestion').innerText=""
      document.querySelector('#mainPic').src = data.drinks[0].strDrinkThumb
      document.querySelector('#mainIngredient1').innerText = data.drinks[0].strMeasure1 + data.drinks[0].strIngredient1
      document.querySelector('#mainIngredient2').innerText = data.drinks[0].strMeasure2 + data.drinks[0].strIngredient2
      document.querySelector('#mainIngredient3').innerText = data.drinks[0].strMeasure3 + data.drinks[0].strIngredient3
      document.querySelector('#mainIngredient4').innerText = data.drinks[0].strMeasure4 + data.drinks[0].strIngredient4
      document.querySelector('#mainIngredient5').innerText = data.drinks[0].strMeasure5 + data.drinks[0].strIngredient5
      document.querySelector('#mainInstructions').innerText = data.drinks[0].strInstructions
      // document.querySelector('#mainVideo').innerText ="Make It => "+ data.drinks[0].strVideo
      // document.querySelector('.mainHidden').innerText = data.drinks[0].strInstructions
    })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });

}

// This will set the 3 ids as individual variables to run laer and toggle and hide the drink tags in the DOM
// const needsToHide=document.querySelector('drinkQuestion')
// const hidden=document.querySelector('.hidden')
// const hiding=document.querySelector('#hiddenPhoto')



// function getDrink(){
//   needsToHide.classList.add('hidden')
//   hidden.classList.toggle('hidden')
  // hiding.classList.toggle('hidden')
// }
