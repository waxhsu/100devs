//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=iazV6WbUSNiJXn8pPErHZ7clrr2u7LlFJ0XDp6hm&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.date
        document.querySelector('span').innerText = data.explanation


        if (data.media_type == 'image') {
        document.querySelector('img').src = data.hdurl
      } else if (data.media_type == 'video'){
        document.querySelector('iframe').src = data.url
      }





      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
 







//////
