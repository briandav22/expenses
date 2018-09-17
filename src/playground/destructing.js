

const person = {
 name: 'brian',
 age : 22,
 location : {
     city: 'kittery',
     temp: 80
 }
};
//you can set a defaul value. For instance, Anon won't show up here, unless the name value isn't on the person object. 
const {name :firstName = 'Anon', age} = person; //this is equivalent to :

// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

// if (person.location.city && person.location.temp){
//     console.log(`It's ${person.location.temp} in ${person.location.city}`)
// };

const {city,  temp: temperature} = person.location; //can rename the local variable if you want. 

if (city, temperature){ //destructing makes it easier. 
    console.log(`It's ${temperature} in ${city}`) //couldn't use temp anymore, because you changed it. 
}

