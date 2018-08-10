import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCxTl4otCOmvu1l_xHnJZc2XiGoOtn5xtA",
  authDomain: "goalcoach-1.firebaseapp.com",
  databaseURL: "https://goalcoach-1.firebaseio.com",
  projectId: "goalcoach-1",
  storageBucket: "goalcoach-1.appspot.com",
  messagingSenderId: "52335762636"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');