const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("hellow");
});
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  //res.send(`the sum of given two numbers`,`sum:${num1+num2}`);
  //const re=req.body.params.num1;
  let status;
  if (
    typeof num1 === "string" ||
    typeof num2 === "string" ||
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000 ||
    num1 + num2 > 1000000
  ) {
    status = "error";
  } else {
    status = "success";
  }
  let msg;
  if (typeof num1 === "string" || typeof num2 === "string") {
    msg = "Invalid data types";
  } else if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
    msg = "Overflow";
  } else if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
    msg = "Underflow";
  } else {
    msg = "the sum of given two numbers";
  }
  const result = num1 + num2;

  const obj = {
    status: status,
    message: msg,
    sum: result,
  };
  //console.log(typeof result);
  res.send(obj);
});
app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;
  //res.send(`the sum of given two numbers`,`sum:${num1+num2}`);
  //const re=req.body.params.num1;
  let status;
  if (
    typeof num1 === "string" ||
    typeof num2 === "string" ||
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000 ||
    num1 - num2 > 1000000 ||
    num1 - num2 < -1000000
  ) {
    status = "error";
  } else {
    status = "success";
  }
  let msg;
  if (typeof num1 === "string" || typeof num2 === "string") {
    msg = "Invalid data types";
  } else if (num1 > 1000000 || num2 > 1000000) {
    msg = "Overflow";
  } else if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
    msg = "Underflow";
  } else {
    msg = "the difference of given two numbers";
  }
  const result = num1 - num2;

  const obj = {
    status: status,
    message: msg,
    difference: result,
  };
  res.send(obj);
});
app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  //res.send(`the sum of given two numbers`,`sum:${num1+num2}`);
  //const re=req.body.params.num1;
  let status;
  if (
    typeof num1 === "string" ||
    typeof num2 === "string" ||
    num2 === 0 ||
    num1 < -1000000 ||
    num2 < -1000000 ||
    num1 > 1000000 ||
    num2 > 1000000 ||
    num1 / num2 > 1000000
  ) {
    status = "error";
  } else {
    status = "success";
  }
  let msg;
  if (num2 === 0) {
    msg = "Cannot divide by zero";
  } else if (typeof num1 === "string" || typeof num2 === "string") {
    msg = "Invalid data types";
  } else if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
    msg = "Overflow";
  } else if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
    msg = "Underflow";
  } else {
    msg = "The division of given numbers";
  }
  const result = num1 / num2;

  const obj = {
    status: status,
    message: msg,
    result: result,
  };

  res.send(obj);
});
app.post("/multiply", (req, res) => {
  //   const { num1, num2 } = req.body;
  //   //res.send(`the sum of given two numbers`,`sum:${num1+num2}`);
  //   //const re=req.body.params.num1;
  //   if (Number(num1) !== parseFloat(num1) || Number(num2) !== parseFloat(num2)) {
  //     res.send({ status: "error", message: "Invalid data types" });
  //     return;
  //   }

  //   let status;
  //   if (
  //     typeof num1 === "string" ||
  //     typeof num2 === "string" ||
  //     parseFloat(num1) < -1000000 ||
  //     parseFloat(num2) < -1000000 ||
  //     parseFloat(num1) > 1000000 ||
  //     parseFloat(num2) > 1000000 ||
  //     parseFloat(num1) * parseFloat(num2) > 1000000 ||
  //     parseFloat(num1) * parseFloat(num2) < -1000000
  //   ) {
  //     status = "error";
  //   } else {
  //     status = "success";
  //   }
  //   let msg;
  //   let result;
  //   if (typeof num1 === "string" || typeof num2 === "string") {
  //     msg = "Invalid data types";
  //     result = undefined;
  //   } else if (
  //     parseFloat(num1) > 1000000 ||
  //     parseFloat(num2) > 1000000 ||
  //     parseFloat(num1) * parseFloat(num2) > 1000000
  //   ) {
  //     msg = "Overflow";
  //     result = undefined;
  //   } else if (
  //     parseFloat(num1) < -1000000 ||
  //     parseFloat(num2) < -1000000 ||
  //     parseFloat(num1) * parseFloat(num2) < -1000000
  //   ) {
  //     msg = "Underflow";
  //     result = undefined;
  //   } else {
  //     msg = "the product of given numbers";

  //     result = parseFloat(num1) * parseFloat(num2);
  //   }

  //   const obj = {
  //     status: status,
  //     message: msg,
  //     result: result,
  //   };
  //   res.send(obj);
  let num1 = req.body.num1;
  let num2 = req.body.num2;

  if (Number(num1) !== parseFloat(num1) || Number(num2) !== parseFloat(num2)) {
    //res.status(404).send("invalid data types");
    res.send({ status: "error", message: "Invalid data types" });
    return;
  }

  if (
    parseFloat(num1) > 1000000 ||
    parseFloat(num2) > 1000000 ||
    parseFloat(num1) * parseFloat(num2) > 1000000
  ) {
    //res.status(404).send("Overflow");
    res.send({ status: "failure", message: "Overflow" });
    return;
  }

  const result = parseFloat(num1) * parseFloat(num2);

  const answer = {
    status: "success",
    message: "The product of given numbers",
    result: result,
  };
  res.send(answer);
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
