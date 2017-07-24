import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDVSUKQwhYlCeJ6kh1gjUzRD14yVd_5UPA",
    authDomain: "react-quiz-92d06.firebaseapp.com",
    databaseURL: "https://react-quiz-92d06.firebaseio.com",
    projectId: "react-quiz-92d06",
    storageBucket: "",
    messagingSenderId: "373276970924"
};

export const firebaseAPI =   firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();


