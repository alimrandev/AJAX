// REST API
// Type of request
// GET
// POST
// PUT
// DELETE

// AJAX
// A = Asynchronous
// J = JavaScript
// A = and
// X  = XML (JSON)- Data Formate

// Working with ajax

// instantiate => open() => send()
// const btn = document.querySelector('button');
// const p = document.querySelector('p');

// btn.addEventListener('click', loadRequest);

// function loadRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       p.innerText = this.responseText;
//     }
//   };
//   xhr.open('GET', 'hello.txt', true);
//   xhr.send();
// }

// JSON
const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', loadRequest);

function loadRequest() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let result = JSON.parse(this.responseText);
      p.innerText = result;
      console.log(result);
    }
  };
  xhr.open('GET', 'sample.json', true);
  xhr.send();
}
