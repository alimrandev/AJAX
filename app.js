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
const output = document.querySelector('.output');

btn.addEventListener('click', loadRequest);

// function loadRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let result = JSON.parse(this.responseText);
//       p.innerText = result;
//       console.log(result);
//     }
//   };
//   xhr.open('GET', 'sample.json', true);
//   xhr.send();
// }

// using fetch

// function loadRequest() {
//   const profiles = fetch('sample.json');
//   profiles
//     .then((profile) => profile.json())
//     .then((profile) => console.log(profile));
// }

async function loadRequest() {
  const profiles = await fetch('sample.json').then((profile) => profile.json());
  let HTMLOutput = '';
  profiles.forEach(({ name, profession, age, email }, index) => {
    HTMLOutput += `
      <ul>
      <h5>Profile : ${index + 1}</h5>
      <hr>
        <li>
          Name : ${name}
        </li>
        <li>
          Profession : ${profession}
        </li>
        <li>
          Age : ${age}
        </li>
        <li>
          email : ${email}
        </li>
      </ul>
    
    `;
  });

  output.innerHTML = HTMLOutput;
}
