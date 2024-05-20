async function myFunction() {
  return 10;
}

let Promise = myFunction(); //the Promise is promise object not 10!!!
console.log(Promise);
Promise.then((n) => {
  console.log(n);
});
//need to use the "then" to continue
//and the object will automatically use the promise object as a argument

//
//"await" will wait until it done
//if use the "await" will get the full response object
//can use the try catch
//like a sync function or normal function
async function fetchProduct() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    //wait until fulfilled or rejected

    //console.log(response); //will get a full response object
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();
