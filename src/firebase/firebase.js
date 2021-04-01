import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };






   /*  // child_removed
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });


  //firebase dont support arrays so use the const firebaseNotes example for what will work
  /* const firebaseNotes = {
    notes: {
      noteOne: {
        title: 'first note',
        body: 'hey there friend'
      },
      noteTwo: {
        title: 'second note',
        body: 'good day'
      }
    }
  }; */

  /* const database = firebase.database();

  database.ref().on('value', (snapshot) => {
      const val = snapshot.val();
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  }) */
   /* database.ref().set({
      name: 'Vienna', 
      age:32,
      isSingle: false,
      location: {
          city: 'Cleveland',
          state: 'Ohio'
      }
  }).then(() => {
      console.log('data is saved');
  }).catch((e) => {
    console.log('this failed', e);
  }) */ 


  //updates certain things
  /* database.ref().update({
      name: 'Kate',
      age: 30
  }); */

/*   database.ref().set('this is my data');
  database.ref('age').set(30);
  database.ref('location/city').set('Oz'); */

  //challenge//
  // setup then and catch
  //make sure catch actually works
  //switch rules to be open
  //make sure that 'then' runs
  //catch and then are promises

//removes something from the database 
/* database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('data was removed');
    }).catch((e) => {
        console.log('did not remove');
    }); */ 