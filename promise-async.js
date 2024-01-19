const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies() {
   let bodyHTML = document.body;
   setTimeout(function () {
     cookies.forEach((element, index) => {
       bodyHTML.innerHTML += `<li>${element.name}</li>`;
     });
   }, 1000);
 }
   // Progression 2: using setTimeout() - use 1000 units for time parameter


//Progression 3: Create a function to creat cookies and create an object of Promise.

function createCookies() {
   return new Promise(function (resolve, reject) {
     setTimeout(function () {
       let error = false;
       if (error == true) {
         reject('Data fetching was unsuccessfull');
       } else {
         cookies.push(newCookie);
         resolve('data successfully fetched');
       }
     }, 2000);
   });
 }
    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter
      
      // Progression 5: handling errors and adding new cookie to the list


// Progression 7: creating a new async function

// calling the new async function
async function initateWork() {
   await createCookies();
   getCookies();
 }
 initateWork();
 