// 1.sayHello after 2 seconds

function sayHello() {
  console.log("Hello after 2 seconds");
}

function callSayHello() {
  setTimeout(sayHello, 2000);
}

callSayHello();  

 
//2. output

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

//3. Convert callbacks

function loadData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}

loadData().then(data => console.log(data));


//4.Create a Promise Chain

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User"), 1000);
  });
}

function getPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${user}'s posts`), 1000);
  });
}

// Promise chain
getUser()
  .then(user => {
    console.log("Got user:", user);
    return getPosts(user);
  })
  .then(posts => {
    console.log("Got posts:", posts);
  });

  //5.Async/await

  async function displayUserPosts() {
  const user = await getUser();
  console.log("Got user:", user);
  
  const posts = await getPosts(user);
  console.log("Got posts:", posts);
}

displayUserPosts();


