/* LESSON 3 - Programming Tasks */

/* Profile Object  */




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
myProfile.placesLived.forEach(property => { 
    let dt = document.createElement('dt'); 
    let dd = document.createElement('dd');
    dt.textContent = property; 
    dd.textContent = property[1]; 
    document.querySelector('#places-lived').appendChild(dt); 
    document.querySelector('#places-lived').appendChild(dd); 

});


