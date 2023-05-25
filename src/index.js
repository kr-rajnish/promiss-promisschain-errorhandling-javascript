import "./styles.css";
/*
document.getElementById("app").innerHTML = `
<h1>Promiss tutorial</h1> 
<p>1. Promise can be created using a new Promise() constructor function.</br>
// 2. This constructor function takes a callback function as argument. </br>
// 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.</br>
// 4. We can only resolve or reject a promise. Nothing else can be done.</br>
// 5. An error can also be created using new Error('error message').</br>
// 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.</br>
// 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.</br>
// 8. It can be useful in a way if we want to catch error for a particular portion of a chain.</br>
// 9. We can have multiple catch based on requirement and then a general catch at the end.</br>
// 10. Always remember to return a value in the promise chain for the next .then to use .</br>
// 11. If it returns a value => It will be  used as a parameter in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.</p>
`;

const cart = ["shoes", "pants", "kurta"];

const promiss = createOrder(cart);

promiss
  .then(function (orderId) {
    console.log(orderId);
  })
  //for handling the rejection (i.e not show in red line)
  .catch(function (err) {
    console.log(err.message);
  });

//Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validetCart
    //orderId
    if (!validetCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      // resolve(orderId);
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}
function validetCart(cart) {
  /* for resolve our promiss */
  // return true;

  /* for reject our promiss pass 
  return false;
}
*/

document.getElementById("app").innerHTML = `
<h1>Promiss chaining tutorial</h1> `;

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  //for handling the rejection (i.e not show in red line)
  .catch(function (err) {
    console.log(err.message);
  });

//Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validetCart
    //orderId
    if (!validetCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      // resolve(orderId);
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderId){
  return new Promise(function(resolve, reject){
    resolve("Payment Successfull")
  })
}
function validetCart(cart) {
  /* for resolve our promiss */
  return true;

  /* for reject our promiss pass */
  // return false;
}
