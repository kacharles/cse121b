/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Charles Alfred Koenig';
let currentYear = new Date().getFullYear(); 
let profilePicture = "images/Charles_Koenig_300x309.jpg";


/* Step 3 - Element Variables */
nameElement = document.getElementById('name');
foodElement = document.getElementById('food'); 
yearElement = document.querySelector('#year'); 
imageElement = document.querySelector("img"); 


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear; 
imageElement.setAttribute('src', profilePicture); 
imageElement.setAttribute('alt', 'Profile image of Charles Alfred Koenig');



/* Step 5 - Array */

let favFood = ['Fried Rice', 'Meat Wrap', 'Chicken Wrap', 'Chicken & Fries', 'Burger'];
foodElement.innerHTML = favFood; 
let singleFood = favFood[1]; 
favFood.push(singleFood); 
foodElement.innerHTML += `<br>${favFood}`; 
favFood.shift(); 
foodElement.innerHTML += `<br>${favFood}`; 
favFood.pop(); 
foodElement.innerHTML += `<br>${favFood}`; 






