let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// console.log(fetchPromise);

//step 1.
//using the the "then" to do next thing when the asyc function done

//callback hell
// fetchPromise.then((response) => {
//   response.json().then((data) => {//change the response to json notation
//     console.log(data);
//   });
// });

//step 2.
//use the return function to solve the callback hell
// fetchPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//step 3.
//use the arrow function render it better
//use the multiple then to connect everything(promise chaining)
//the data in the following data is the further return
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(fetchPromise);
    console.log(e);
  });
