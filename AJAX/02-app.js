const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch("http:/oojs/json/superheroes.json");

//if all promise fullfil and return
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    responses.forEach((responses) => {
      console.log(responses.url);
    });
  })
  .catch((e) => {
    console.log(e);
  });
