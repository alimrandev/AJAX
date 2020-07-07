// console.log(getPosts());
// async function getPosts() {
//   const posts = await fetch(
//     'https://jsonplaceholder.typicode.com/posts'
//   ).then((data) => data.json());

//   console.log(posts);
// }

// getPosts();

// async function getPost() {
//   const posts = await fetch(
//     'https://jsonplaceholder.typicode.com/posts/1'
//   ).then((data) => data.json());

//   console.log(posts);
// }

// getPost();
const data = {
  title: 'My First Post',
  body: 'Hi this is my very first post for crating a post in a API',
  userId: 1,
};
async function createPost() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  }).then((data) => data.json());
  console.log(result);
}
createPost();

// Update Existing Data

async function updatePost() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  }).then((data) => data.json());
  console.log(result);
}

updatePost();

// delete selected post

async function deletePost() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  }).then((data) => data.json());
  console.log(result);
}

deletePost();

// using HTTP Library
const data2 = {
  title: 'My First Post',
  body: 'Hi this is my very first post for crating a post in a API',
  userId: 1,
};

const http = new Http();

const getPost = http.get('https://jsonplaceholder.typicode.com/posts');

getPost.then((data) => console.log(data));

const creatPost = http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data2
);

creatPost.then((data) => console.log(data));
