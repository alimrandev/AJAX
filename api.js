const btn = document.querySelector('button');
const output = document.querySelector('.output');

btn.addEventListener('click', loadRequest);

async function loadRequest() {
  const jokes = await fetch(
    'https://api.chucknorris.io/jokes/random?categories=animal'
  ).then((joke) => joke.json());

  output.textContent = jokes.value;
}
