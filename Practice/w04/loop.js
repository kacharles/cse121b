// const DAYS = 6; 
// const LIMIT = 30; 
// let studentReport = [11, 42, 33, 64, 29, 37, 44]; 

// for (let i = 0; i < studentReport.length; i++) { 
//     if (studentReport[i] < LIMIT) { 
//         console.log(studentReport[i]);
//     }
// }

// // while loop 
// let i = 0; 
// while (i < studentReport.length) { 
//     if (studentReport[i] < LIMIT) { 
//         console.log(studentReport[i]);
//     }
//     i++;
// }
// // forEAch loop 
// studentRepport.forEach(function (item) { 
//     if (item< LIMIT) { 
//         console.log(item);
//     }
// }); 

// for (let i in studentReport) { 
//     if (studentReport[i] < LIMIT) { 
//         console.log(studentReport[i]);
//     }
// }

myInfo = { 
    name: "Brother T", 
    photo: "images/photo.jpg", 
    favoriteFoods: ["Fettucini", "Steak", "Shrimp", "Bakes Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID", 
            length: "5 years",
        },
        {
            place: "Ammon, ID", 
            length: "3 years",
        },
        {
            place: "Sandy, UT", 
            length: "1 year", 
        },
    ],

};

// let favoriteFood1 = document.createElement('li'); 
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement('li'); 
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement('li'); 
// favoriteFood3.textContent = myInfo.favoriteFoods[2]; 

// let favoriteFood4 = document.createElement('li'); 
// favoriteFood4.textContent = myInfo.favoriteFoods[3]; 

// // Step 5: Append the <li> elements created above as children of 
// // the HTML <ul> element with an ID of favorite-foods

// document.querySelector('#favorite-foods').appendChild(favoriteFood1);
// document.querySelector('#favorite-foods').appendChild(favoriteFood2);
// document.querySelector('#favorite-foods').appendChild(favoriteFood3); 
// document.querySelector('#favorite-foods').appendChild(favoriteFood4); 

// with .forEach method 

// const foodsElement = document.querySelector('#favorite-foods'); 
// function createAndAppendFoodItems(food) { 
//     let favoriteFood = document.createElement('li'); 
//     favoriteFood.textContent = food; 
//     foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createAndAppendFoodItems);

with the .map element 
const foodsElement = document.querySelector('#favorite-foods'); 
function mapFoodItem(food) { 
    let favoriteFood = document.createElement('li'); 
    favoriteFood.textContent = food; 
    return favoriteFood; 

}

function mapFoodElementSmall(food) { 
    return `<li>${food}</li>`; 
}
const foodListElements = myInfo.foodListElements.map(mapFoodItem); 
foodElements.innerHTML = foodListElements.join(''); 


