// The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink(){
//   let drink = document.querySelector('input').value
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       let min = 0
//       let max = [data.drinks.length-1]
//       let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
//        // Math.floor((Math.random()*10))
//       console.log(data.drinks[randomNumber]) // VIEW OBJECT INFO
// /*       document.querySelector('h2').innerText = data.drinks[randomNumber].strDrink
//       document.querySelector('img').src = data.drinks[randomNumber].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[randomNumber].strInstructions
//       document.querySelector('h4').innerText = data.drinks[randomNumber].strIngredient1 */

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }




document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let drink = document.querySelector('input').value
  let randomNumber = Math.floor((Math.random()*10))
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let min = 0
      let max = [data.drinks.length-1]
      let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
      console.log(data.drinks[randomNumber]) 
        document.querySelector('h2').innerText = data.drinks[randomNumber].strDrink
        document.querySelector('img').src = data.drinks[randomNumber].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[randomNumber].strInstructions
        document.querySelector('h4').innerText = data.drinks[randomNumber].strIngredient1
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}