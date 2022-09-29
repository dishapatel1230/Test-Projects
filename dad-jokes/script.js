 const jokeE1 = document.getElementById('joke')
 const jokebtn = document.getElementById('jokeBtn')

 jokebtn.addEventListener('click',generateJoke)

 generatJoke()

 // USING ASYNC/AWAIT
async function generateJoke(){
  const config = {
    headers:{
        Accept:'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeE1.innerHTML = data.joke
}