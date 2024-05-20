let balance = 0; // shared resource
let mutex = Promise.resolve(); // return fulfilled Promise object

const randomDelay = () => {
  // return value is a Promise
  // and the time for this promise changing from pending to fulfilled
  // is random (0s-0.1s)
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
};

async function loadBalance() {
  await randomDelay(); // 等個隨機的0s~0.1s
  return balance;
}

async function saveBalance(value) {
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`Before sell Grapes: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`After sell Grapes: ${newBalance}`);
    })
    .catch((e) => {
      console.log(e);
    });
  return mutex;
}

async function sellOlives() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`Before sell Olives: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`After sell Olives: ${newBalance}`);
    })
    .catch((e) => {
      console.log(e);
    });
  return mutex;
}

async function main() {
  await Promise.all([
    sellGrapes(),
    sellOlives(),
    sellOlives(),
    sellOlives(),
    sellGrapes(),
    sellGrapes(),
    sellGrapes(),
  ]);
  const balance = await loadBalance();
  console.log(`Total price is : $${balance}`);
}

main();
