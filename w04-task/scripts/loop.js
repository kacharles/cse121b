myInfo =  { 
    name: "Brother T", 
    photo: "images/photo.jpg", 
    favoriteFoods: ["Fettuchini", "Steak", "Chicken", "Shrimp", "Baked Potatoes"], 
    hobbies: ["Reading", "Fishing", "Camping"], 
    placesLived: [
        { 
            place: "RExburd, ID", 
            length: "5 years",
        }, 
        { 
            place: "Ammon, ID", 
            length: "3 years"
        }, 
        { 
            place: "Sandy, UT", 
            length: "1 Year"
        }
    ], 
}; 

let favoriteFood1 = document.createElement('li'); 
favoriteFood1.textContent = myInfo.favoriteFoods[0]; 

let favoriteFood2 = document.createElement('li'); 
favortiteFood2.textContent = myInfo.favoriteFoods[1]; 

let favoriteFood3 = document.createElement('li'); 
favoriteFood3.textContent = myInfo.favoriteFoods[2]; 

let favoriteFood4 = document.createElement('li'); 
favoriteFood4.textContent = myInfo.favoriteFoods[3]; 

document.querySelector("#favorite-foods").appendChild(favoriteFood1)
document.querySelector("#favorite-foods").appendChild(favoriteFood2)
document.querySelector("#favorite-foods").appendChild(favoriteFood3)
document.querySelector("#favorite-foods").appendChild(favoriteFood4)

const foodsElement = document.querySelector('#favorite-foods'); 
function createandAppendFoodItem(food) { 
    let favoriteFood = document.createElement('li'); 
    favoriteFood.textContent = food; 
    foodsElement.appendChild(favoriteFood); 

}
myInfo.favoriteFoods.forEach(createandAppendFoodItem); 


//with .map 
const foodElement = document.querySelector('#favorite-foods'); 
function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food; 
    return favoriteFood; 
}

// this function could also be written this way using a template literal 
function mapFoodItemSmall(food) { 
    return `<li>${food}</li>`; 
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem); 
foodElement.innerHTML = foodListElements.join(''); 

const foodElement = document.querySelector("#favorite-foods"); 
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string 
// returns a string of html 

function generateListMarkup(list, templateCallback) { 
    const htmlList = list.map(templateCallback);
    return htmlList.join(""); 
}

// reuqries an place string 
// return that string embedded in HTML markup 

function  placesTemplate(place) { 
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
); 
