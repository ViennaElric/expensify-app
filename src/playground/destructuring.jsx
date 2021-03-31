

// Object destructuring //

//const person = {
    //name: 'Rachel',
    //age: 32,
    //location: {
        //city: 'Denver',
        //temp: 71
    //}
//};

/* const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age},`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
} */



/* const book = {
    title: 'A Court of Silver Flames',
    author: 'Sarah J Maas',
    publisher: {
        name: 'Bloomsbury Publishing'

    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName); */


//Array Destructuring//

const address = ['1299 S Juniper Street' , 'Denver' , 'Colorado' , '80203'];
const [, city, state = 'Aurora'] = address; //matching through position of the array above
console.log(`You are in ${city} ${state}`)



const item = ['coffee (hot)' , '$2', '$3', '$4' ]
const [ itemName, smallPrice, mediumPrice] = item;
console.log(`A medium ${itemName} is ${mediumPrice}`)

//you are able to rename the local variable that you create
//you have the ability to set up default values
