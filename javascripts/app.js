'use strict';
// 1. write a function to fetch the Categories.json file

// EXAMPLE #1: 'OLD' way of doing this:
// function getCategories(callback) {
//   $.ajax({
//     url: "data/categories.json"
//   }).done(function(data) {
//     callback(data);
//   });
// }
// function logData(data) {
//   console.log("data from XHR: ", data);
// }
// getCategories(logData);


// EXAMPLE #2: Promise NEW way of writing the same thing as above
// function getCategories() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "data/categories.json"
//     }).done((data) => {
//       resolve(data);
//     }).fail((error) => {
//       reject(error);
//     });
//   });
// }

// function logData(data) {
//   console.log("data from XHR: ", data);
// }

// var myPromiseData = getCategories();
// console.log("myPromiseData: ", myPromiseData);

// myPromiseData.then((categoryData) => { //this is the resolved data
//   console.log("myPromiseData resolved: ", categoryData);
// }, (error) => {
//   console.log("something went wrong: ", error);
// });



// EXAMPLE #3 calling 3 json files: Categories, Types, and Products.
// So, you create 3 promises:

//promise #1
// function getCategories() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "data/categories.json"
//     }).done((data) => {
//       resolve(data);
//     }).fail((error) => {
//       reject(error);
//     });
//   });
// }

// // promise #2
// function getTypes() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "data/types.json"
//     }).done((data) => {
//       resolve(data);
//     }).fail((error) => {
//       reject(error);
//     });
//   });
// }

// // promise #3
// function getProducts() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "data/products.json"
//     }).done((data) => {
//       resolve(data);
//     }).fail((error) => {
//       reject(error);
//     });
//   });
// }

// function logData(data) {
//   console.log("data from XHR: ", data);
// }

// getCategories() //this returns the promise
//   .then((categoryData) => {
//     console.log("my categories data: ", categoryData); //this returns the #1 category promise
//     return getTypes();
//   }, (error) => {
//     console.log("something went wrong: ", error);
//   })
//   .then((typesData) => {
//     console.log("my types data: ", typesData); //this returns the #2 types promise
//     return getProducts();
//   })
//   .then((productsData) => {
//     console.log("my products: ", productsData); //this returns the #3 products promise
//   })
//   .then(() => {
//     console.log("All done!");  //this .then isn't necessary, just showing that you can keep going with the .then statements
//   });






//instead of using the chain of .then statements as demonstrated above...
//Use promise.all!!!!

//promise #1
function getCategories() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "data/categories.json"
    }).done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
}

// promise #2
function getTypes() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "data/types.json"
    }).done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
}

// promise #3
function getProducts() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "data/products.json"
    }).done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
}

function logData(data) {
  console.log("data from XHR: ", data);
}

Promise.all([getCategories(), getTypes(), getProducts()])  //promise.all.  pass in all of the promises here and call them with ()
.then( (alltheStuff)=> {
  logData(alltheStuff);  //this just goes to logData and does the console log above
});



