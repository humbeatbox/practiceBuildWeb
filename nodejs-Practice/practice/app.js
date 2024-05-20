// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (req.url == "/") {
//     res.write("WelCome my main Page!");
//     res.end();
//   } else if (req.url == "/anotherPage") {
//     res.write("another Page!");
//     res.end();
//   } else if (req.url == "/myPage") {
//     fs.readFile("myPage.html", (e, data) => {
//       if (e) {
//         res.write("Error!");
//         res.end();
//       } else {
//         res.write(data);
//         res.end();
//       }
//     });
//   }
// });

// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// });
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "口品",
    T: "U ",
  })
);
