import "./styles.css";
/*
document.getElementById("app").innerHTML = `
<h1>Promiss tutorial</h1> `;

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
