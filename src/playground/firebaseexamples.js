// import * as firebase from 'firebase';



// const config = {
//     apiKey: "AIzaSyC4vChRi_FFpGaM45pu5_baQ2FpfMqhlls",
//     authDomain: "expensify-f04aa.firebaseapp.com",
//     databaseURL: "https://expensify-f04aa.firebaseio.com",
//     projectId: "expensify-f04aa",
//     storageBucket: "expensify-f04aa.appspot.com",
//     messagingSenderId: "419628711014"
//   };

// firebase.initializeApp(config);
// const database = firebase.database();


// database.ref('expenses').on('child_changed', (snapshot)=>{

//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot)=>{

//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_removed', (snapshot)=>{

//     console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//       const expenses = [];
//       snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//       console.log(expenses);
//   })
//   .catch((e)=>{
//       console.log(e)
//   })

// database.ref('expenses').push({
//     description:'rent',
//     amount:5000,
//     note:'',
//     createdAt:1902191201
// })
// database.ref('expenses').push({
//     description:'book',
//     amount:10000,
//     note:'',
//     createdAt:1902192221
// }).then(()=>{
//     console.log('data addddded')
// }).catch((e)=>{
//     console.log(e)
// })
// database.ref('expenses').push({
//     description:'house',
//     amount:50000000,
//     note:'',
//     createdAt:1902191201
// }).then(()=>{
//     console.log('data adssdded')
// }).catch((e)=>{
//     console.log(e)
// })
// database.ref('notes/-LMrxf4wTWygP_nt5u95').remove()
// database.ref('notes').push(
//     {
//         title: 'course tops',
//         body: 'this is also a note'
// })


// const firebaseNotes = {
//     notes: {
//         someid:{
//             title: 'first note',
//             body: 'this is note'
//         },
//         someid2:{
//             title: 'first note',
//             body: 'this is note'
//         },

//     }
// }
// const notes = [{

//     id:12,
//     title: 'first note',
//     body: 'this is note'
// }, {
//     id:13,
//     title: '2nd note',
//     body: 'this is note'

// }, {
//     id:14,
//     title: '3rd note',
//     body: 'this is note'

// }]

// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val());
// }, (e)=>{
//     console.log(e)
// })

// setTimeout(()=>{
//     database.ref('job').update({
//         company:'newcompany'
//     })
// }, 2500)

// setTimeout(()=>{
//     database.ref().off(onValueChange())
// }, 5500)

// setTimeout(()=>{
//     database.ref('job').update({
//         company:'plixer'
//     })
// }, 8500)

// database.ref('job')
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e)=>{
//     console.log(e)
// })

// database.ref().set({
//     name: 'Brian Davenport',
//     age: 33,
//     stressLevel: 6,
//     job:{
//         title:'Software Developer',
//         company:'Google'
//     },
//     location: {
//         city:'Kittery',
//         country: 'united states'
//     }
// }).then(()=>{
//     console.log('data is saved')
// }).catch((e)=>{
//     console.log('this faied', e)

// });

// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'seatlle'
// }).then(()=>{
//     console.log('data is saved')
// }).catch((e)=>{
//     console.log('this faied', e)

// });

// // database.ref().set('This is my Data')

// // database.ref('age').set(27)
// // database.ref('location/city').set('norfolk')
// database.ref('attributes').set({
//     'height':16,
//     'weight':50
// }).then(()=>{
//     console.log('data was saveds')
// }).catch((e)=>{
//     console.log(e)
// })
// database.ref('isSingle').remove().then(()=>{
//     console.log('data was removed')
// }).catch((e)=>{
//     console.log(e)
// })