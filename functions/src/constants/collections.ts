import * as firebase from "firebase-admin";

export const orderCollection = firebase.firestore().collection('order')