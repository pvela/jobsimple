import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7Nuhxj9uJl-HpuoP4RVSNI48BOYDuT4c",
    authDomain: "ethdenver2019.firebaseapp.com",
    databaseURL: "https://ethdenver2019.firebaseio.com",
    projectId: "ethdenver2019",
    storageBucket: "ethdenver2019.appspot.com",
    messagingSenderId: "939225439339"
  };

firebase.initializeApp(config);

// The shared state object that any vue component can get access to.
// Has some placeholders that we’ll use further on!
export const store = {
    workersInFeed: null,
    sponsorsInFeed: null,
  currentUser: null,
  writeWorker: (worker) => workersCollection.add({
    createdOn: new Date(),
    name: store.currentUser,
    worker
  }),
  writeSponsor: (sponsor) => sponsorsCollection.add({
    createdOn: new Date(),
    name: store.currentUser,
    sponsor
  }),
  signUp: function() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (user) => {
        this.$router.replace('home')
      },
      (err) => {
        alert('Oops. ' + err.message)
      }
    );
  }
};

// a reference to the workers collection
const workerCollection = firebase.firestore()
  .collection('workers');

workerCollection
  .onSnapshot((workerRef) => {
    const workers = [];
    workerRef.forEach((doc) => {
      const worker = doc.data();
      worker.id = doc.id;
      workers.push(worker);
    });
    store.workersInFeed = workers;
  });

// a reference to the sponsorts collection
const sponsorCollection = firebase.firestore()
  .collection('sponsors');

sponsorCollection
  .onSnapshot((sponsorRef) => {
    const sponsors = [];
    sponsorRef.forEach((doc) => {
      const sponsor = doc.data();
      sponsor.id = doc.id;
      sponsors.push(sponsor);
    });
    store.sponsorsInFeed = sponsors;
  });

  // When a user logs in or out, save that in the store
firebase.auth().onAuthStateChanged((user) => {
    store.currentUser = user;
  });