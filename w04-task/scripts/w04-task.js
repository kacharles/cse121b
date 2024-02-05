/* LESSON 3 - Programming Tasks */

/* Profile Object  */


// alert("Script working"); 

/* Populate Profile Object with placesLive objects */
let myProfile = { 
    name: "Charles Koenig", 
    photo: "images/images/Charles_Koenig_300x309.jpg", 
    favoriteFood: [
        "Rice",
        "Tikka Masala",
        "Prioshki",
        "Shrimp", 
        "Banna Cream Pie"
    ], 
    hobbies: [
        "Table Pool", "Table Tennis", "Soccer", "Football", "Biking"
    ],
    placesLived: [
        
    ],

}
myProfile.placesLived.push(
    {
        place: "San Fanncisco, CA",
        length: "1 Year"
    }
);

/* DOM Manipulation - Output */
//Assigning an HTML element with the value of the myProfile obect with the name property using 
//the textContent method

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo); 
document.querySelector('#photo').setAttribute('alt', myProfile.name); 

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => { 
 let li = document.createElement('li'); 
 li.textContent = food; 
 document.querySelector('#favorite-foods').appendChild(li); 
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => { 
let li = document.createElement('li'); 
li.textContent = hobby; 
document.querySelector('#hobbies').appendChild(li);
}); 


/* Places Lived DataList */

placesElement = document.querySelector('#places-lived')

function generateListMarkup(list, templateCallback) { 
    const htmlList = list.map(templateCallback); 
    return htmlList; 
}

function placeTemplate(place) { 
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`; 
}

placesElement.innerHTML = generateListMarkup(myProfile.placesLived, placeTemplate); 




