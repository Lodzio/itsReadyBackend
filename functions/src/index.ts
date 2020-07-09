import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin'
import {finishOrderService} from './service/order'
firebase.initializeApp()

export const finishOrder = functions.https.onRequest(finishOrderService);
